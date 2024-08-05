"use client";

import styled from "styled-components";

import LinkButton from "../_components/link-button";

import color from "@/shared/styles/color";
import { containerStyle } from "../_styles/container-style";

export const Container = styled.div`
  ${containerStyle}
  gap: 4rem;
  padding: 7.4rem 2.5rem 0rem 2.5rem;
`;

export const Title = styled.h1`
  align-self: flex-start;
  color: ${color.warmgray100};
  font-size: 3.6rem;
  font-weight: 700;
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

export const Input = styled.input`
  padding: 1.5rem;
  color: ${color.warmgray100};
  border-radius: 1rem;
  border: 0.1rem solid ${color.warmgray100};

  &::placeholder {
    color: ${color.warmgray100};
  }
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
