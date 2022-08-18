import React from "react";
import { COLORS } from "../constant/styleConstant";
import { Button, ButtonGroup, color } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface IButtonProps {
  /**
   * Button Size
   */
  size?: number;

  /**
   * Button text
   */
  text?: string;

  /**
   * Background Color
   */
  backgroundColor?: string;

  /**
   * Width of the button
   */
  widthPercentage?: string;

  /**
   * Callback for when the button is clicked
   */
  onClick?: () => void;

  /**
   * Button Children
   */
  children?: React.ReactNode;
}

export const CustomButton: React.FC<IButtonProps> = (props) => {
  const {
    size = 60,
    backgroundColor = COLORS.GREY,
    widthPercentage,
    onClick,
    text,
    children,
  } = props;

  //styled components
  const StyledButton = styled.button`
    background-color: ${backgroundColor};
    width: ${widthPercentage};
    height: ${size};
    font-size: ${widthPercentage};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `;
  return <StyledButton style={style.container}>{children}</StyledButton>;
};

export const style = {
  container: {
    minHeight: 45,
    minWidth: 140,
    borderRadius: 5,
  },
};
