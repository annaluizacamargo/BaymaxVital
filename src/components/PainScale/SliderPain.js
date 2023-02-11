import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

export default function SliderPain(props) {
  const [colorSlider, setColorSlider] = useState('');
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 760;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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

  const painValue = props.value
  const functionChangeValue = props.changeValue
  console.log('painValue', painValue)
  console.log('tipo', painValue)

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="PainValue"
        value={painValue}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        color={colorSlider || 'success'}
        onChange={OnChange}
        orientation={width < breakpoint ? 'vertical' : 'horizontal'}
        onClick={functionChangeValue}
      />
    </Box>
  );
}
//(value) => console.log(value.target.textContent)