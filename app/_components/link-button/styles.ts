"use client";

import Link from "next/link";
import styled from "styled-components";

import color from "@/shared/styles/color";

export const Container = styled(Link)`
  border-radius: 1rem;
  background-color: ${color.brown700};
  color: ${color.warmgray100};
  font-weight: 600;
  text-align: center;
`;
