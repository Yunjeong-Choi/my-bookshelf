"use client";

import styled from "styled-components";

import color from "@/shared/styles/color";

export const Container = styled.input`
  padding: 1.5rem;
  color: ${color.warmgray100};
  border-radius: 1rem;
  border: 0.1rem solid ${color.warmgray100};

  &::placeholder {
    color: ${color.warmgray100};
  }
`;
