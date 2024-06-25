"use client";

import { useFormState } from "react-dom";

// TODO: 아애님은 import문 배치 순서의 기준을 가지고 계신가요?
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogin from "@/components/SocialLogin";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">내 책장을 보관할 계정을 만들어요</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="닉네임"
          required
          errors={state?.fieldErrors.username}
        />
        <Input
          name="email"
          type="email"
          placeholder="이메일"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호"
          minLength={PASSWORD_MIN_LENGTH}
          required
          errors={state?.fieldErrors.password}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="비밀번호 확인"
          minLength={PASSWORD_MIN_LENGTH}
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <Button text="계정 만들기" />
      </form>
      <SocialLogin />
    </div>
  );
}
