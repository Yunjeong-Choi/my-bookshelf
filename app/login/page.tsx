import {
  Container,
  ContentContainer,
  Divider,
  GitHubButton,
  Input,
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
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <LoginButton href="/my-bookshelf" text="로그인하기" />
        </LoginSection>
        <Divider />
        <GitHubButton href="/my-bookshelf" text="깃헙으로 입장하기" />
      </ContentContainer>
    </Container>
  );
}
