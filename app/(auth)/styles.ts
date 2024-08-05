"use client";

import styled from "styled-components";

import LinkButton from "./_components/link-button";

import color from "@/shared/styles/color";
import { authContainerStyle } from "./_styles/container-style";
import { authTitleStyle } from "./_styles/title-style";

export const Container = styled.div`
  ${authContainerStyle}
`;

export const TitleSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleIcon = styled.span`
  font-size: 12.8rem;
`;

export const Title = styled.h1`
  ${authTitleStyle}
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0rem 2rem 4rem 2rem;
`;

export const StartButton = styled(LinkButton)`
  width: 100%;
  padding: 1.4rem 0rem;
`;

export const TextButtonWrapper = styled.div``;

export const TextButtonLabel = styled.label`
  margin-right: 0.8rem;
  color: ${color.warmgray100};
  font-size: 1.4rem;
`;

export const TextButton = styled.button`
  color: ${color.brown600};
  font-size: 1.4rem;
  text-decoration: underline;
`;
