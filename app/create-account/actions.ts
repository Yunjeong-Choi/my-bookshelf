"use server";

import { z } from "zod";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";

// TODO: 여기에 사용되지 않은 메소드 정리 필요 (toLowerCase, transform, refine 등)
// TODO: 유효성 검사 규칙 정리 필요
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자로만 작성해주세요!",
        required_error: "닉네임은 필수항목입니다.",
      })
      .trim(),
    email: z.string().email(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(4),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    // TODO: 강의(6.2 refinement)에서는 그냥 refine을 썼는데?
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "비밀번호가 일치하지 않습니다.",
        path: ["confirm_password"],
      });
    }
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirmPassword"),
  };

  const result = formSchema.safeParse(data); // INFO: safeParse를 사용하면 에러 없이, data를 클라이언트에 넘겨줄 수 있다.

  if (!result.success) {
    return result.error.flatten();
  }
}
