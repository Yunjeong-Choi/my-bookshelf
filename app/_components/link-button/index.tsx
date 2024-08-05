import { Container } from "./styles";

interface ButtonProps {
  className?: string;
  text: string;
  href: string;
}

export default function LinkButton({ text, ...props }: ButtonProps) {
  return (
    <Container className={props.className} href={props.href}>
      {text}
    </Container>
  );
}
