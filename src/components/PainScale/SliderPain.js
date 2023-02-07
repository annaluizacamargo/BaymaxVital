import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

function valuetext(value) {
  return value;
}

export default function SliderPain() {
  const [colorSlider, setColorSlider] = useState('');

  const OnChange = (props) => {
    const valueSlider = props.target.value;  
    if (valueSlider == 0 || valueSlider == 1 || valueSlider == 2) {
      setColorSlider('success')
    } else if (valueSlider == 3 || valueSlider == 4) {
      setColorSlider('secondary')
    } else if (valueSlider == 5 || valueSlider == 6) {
      setColorSlider('primary')
    } else if (valueSlider == 7 || valueSlider == 8) {
      setColorSlider('warning')
    } else {
      setColorSlider('error')
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="PainValue"
        defaultValue={0}
        getAriaValueText={valuetext}
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
