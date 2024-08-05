"use client";

import styled from "styled-components";

import color from "@/shared/styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${color.brown900};
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
  color: ${color.warmgray100};
  font-size: 3rem;
  font-weight: 700;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 0rem 2rem 4rem 2rem;
`;

export const StartButton = styled.button`
  border-radius: 1rem;
  background-color: ${color.brown700};
  color: ${color.warmgray100};
  font-weight: 600;

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
