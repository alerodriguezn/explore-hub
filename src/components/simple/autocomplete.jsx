"use client";
import * as React from 'react';
import Autocomplete from '@mui/joy/Autocomplete';
import Stack from '@mui/joy/Stack';
import SearchIcon from '@mui/icons-material/Search';
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
export default function AutoComplete(props) {
  // Props: placeholder (string) - Placeholder text for the input, data (Array<any>) - Options for the autocomplete.

  return (
    <Stack spacing={2}>
      <Autocomplete
        startDecorator={<SearchIcon />}
        placeholder={props.placeholder}
        options={props.data}
        sx={{ background: colors.accent , color:colors.background, borderBlockColor:colors.secondary}}
      />
    </Stack>
  );
}
