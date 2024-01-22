"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface ButtonProps {
  title: string;
  color?: string;
  href?: string | object | any;
}

const Button = styled.button`
  background-color: ${(props) =>
    props.color === "white" ? "white" : "var(--themeColor)"};
  border: none;
  height: 42px;
  border-radius: 3px;
  padding: 2px 16px;
  color: ${(props) =>
    props.color === "white" ? "var(--themeColor)" : "white"};
  &:hover {
    background-color: var(--themeHover);
  }
`;

const ButtonText = styled.p`
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
`;

const CustomButton = ({ title, color, href }: ButtonProps) => {
  return (
    <Link href={href}>
      <Button color={color}>
        <ButtonText>{title}</ButtonText>
      </Button>
    </Link>
  );
};

export default CustomButton;
