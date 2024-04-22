"use client";
import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';


export default function Paper(props) {
  // Props: content (ReactNode) - Content to be rendered inside the card.

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          overflow: 'auto',
          resize: 'horizontal',
          '&::-webkit-resizer': {
            display: 'none', // Oculta el botón de redimensionamiento en navegadores basados en WebKit (como Chrome)
            },
        }}
      >
        <CardContent style={{display: "flex;",justifyContent: "center;",alignContent:"center;"}}>
          {props.content}
        </CardContent>
      </Card>
    </Box>
  );
}
