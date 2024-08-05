"use client";

import styled from "styled-components";

import LinkButton from "@/app/(auth)/_components/link-button";

import color from "@/shared/styles/color";
import { authContainerStyle } from "@/app/(auth)/_styles/container-style";
import { authTitleStyle } from "../_styles/title-style";

export const Container = styled.div`
  ${authContainerStyle}
  gap: 4rem;
  padding: 7.4rem 2.5rem 0rem 2.5rem;
`;

export const Title = styled.h1`
  align-self: flex-start;
  ${authTitleStyle}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const LoginButton = styled(LinkButton)`
  padding: 1.5rem;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0.1rem;
  background-color: ${color.warmgray100};
`;

export const GitHubButton = styled(LoginButton)`
  padding: 1.5rem;
`;
