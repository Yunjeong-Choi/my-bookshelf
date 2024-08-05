import {
  ButtonSection,
  Container,
  StartButton,
  TextButton,
  TextButtonLabel,
  TextButtonWrapper,
  Title,
  TitleIcon,
  TitleSection,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <TitleSection>
        <TitleIcon>🗝️</TitleIcon>
        <Title>Open your bookshelf</Title>
      </TitleSection>
      <ButtonSection>
        <StartButton href="/login" text="시작하기" />
        <TextButtonWrapper>
          <TextButtonLabel>이미 계정이 있나요?</TextButtonLabel>
          <TextButton>로그인</TextButton>
        </TextButtonWrapper>
      </ButtonSection>
    </Container>
  );
}
