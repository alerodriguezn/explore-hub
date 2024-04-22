"use client";
import * as React from 'react';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
const colors = {
  text: "#03060c",
  background: "rgb(247, 247, 248)",
  primary: "#213d8d",
  secondary: "#b7c5eb",
  accent: "#2e4fa8",
  Dark: "#25282D",
  Base: "#464B53",
  Pale: "#5D646F",
  Xpale: "#7E86913A",
  Disabled: "#969DA6",
  Success: "#059669",
  Warning: "#E18F05",
  Danger: "#DC2C26",
  DangerSecondary: "#F79996",
  DangerAccent: "#E7211A"
};
export default function MUIButton({ enable, handleClick, name }) {
  console.log(colors)
  const StyledButton = React.useMemo(() => styled(Button)(({ theme, disabled }) => ({
    // styles here
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: '0.875rem',
    lineHeight: 1.5,
    backgroundColor: disabled ? colors.background : colors.primary,
    color: 'white',
    borderRadius: '8px',
    fontWeight: 600,
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 150ms ease',
    border: 'none',
    '&:hover:not(:disabled)': {
      backgroundColor: colors.accent,
    },
    '&:active:not(:disabled)': {
      backgroundColor: colors.secondary,
    },
    [`&.${buttonClasses.focusVisible}`]: {
      boxShadow: '0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5)',
      outline: 'none',
    },
    [`&.${buttonClasses.disabled}`]: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  })), []);


  return (
    <Stack spacing={2} direction="row">
      <StyledButton disabled={!enable} onClick={handleClick}>{name}</StyledButton>
    </Stack>
  );
}
