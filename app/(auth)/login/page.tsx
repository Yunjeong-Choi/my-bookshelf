import AuthInput from "../_components/input";

import {
  Container,
  ContentContainer,
  Divider,
  GitHubButton,
  LoginButton,
  LoginSection,
  Title,
} from "./styles";

export default function LogInPage() {
  return (
    <Container>
      <Title>안녕하세요!</Title>
      <ContentContainer>
        <LoginSection>
          <AuthInput placeholder="이메일" />
          <AuthInput placeholder="비밀번호" />
          <LoginButton href="/my-bookshelf" text="로그인하기" />
        </LoginSection>
        <Divider />
        <GitHubButton href="/my-bookshelf" text="깃헙으로 입장하기" />
      </ContentContainer>
    </Container>
  );
}
