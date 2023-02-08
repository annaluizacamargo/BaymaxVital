import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

export default function SliderPain() {
  const [colorSlider, setColorSlider] = useState('');

  const OnChange = (props) => {
    const valueSlider = props.target.value;

    switch (true) {
      case (valueSlider <= 2):
        setColorSlider('success');
        break;
      case (valueSlider <= 4):
        setColorSlider('secondary');
        break;
      case (valueSlider <= 6):
        setColorSlider('primary');
        break;
      case (valueSlider <= 8):
        setColorSlider('warning');
        break;
      default:
        setColorSlider('error');
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="PainValue"
        defaultValue={0}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        color={colorSlider || 'success'}
        onChange={OnChange}
      />
    </Box>
  );
}
