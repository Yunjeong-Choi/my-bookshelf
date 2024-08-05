import AuthInput from "../_components/input";

import {
  Container,
  ContentContainer,
  Divider,
  GitHubButton,
  JoinButton,
  LoginSection,
  Title,
} from "./styles";

export default function JointPage() {
  return (
    <Container>
      <Title>안녕하세요!</Title>
      <ContentContainer>
        <LoginSection>
          <AuthInput placeholder="닉네임" />
          <AuthInput placeholder="이메일" />
          <AuthInput placeholder="비밀번호" />
          <AuthInput placeholder="비밀번호 확인" />
          <JoinButton href="/my-bookshelf" text="계정만들기" />
        </LoginSection>
        <Divider />
        <GitHubButton href="/my-bookshelf" text="깃헙으로 입장하기" />
      </ContentContainer>
    </Container>
  );
}
