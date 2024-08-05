import { InputHTMLAttributes } from "react";

import { Container } from "./styles";

export default function AuthInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return <Container {...props} />;
}
