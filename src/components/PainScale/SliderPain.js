import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `Escala dor = ${value}`;
}

export default function SliderPain() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="PainValue"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
      />
    </Box>
  );
}
