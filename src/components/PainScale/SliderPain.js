import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";

export default function SliderPain(props) {
  const [colorSlider, setColorSlider] = useState('');
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 760;
  const functionChangeValue = props.changeValue
  const painValue = props.value

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const OnChange = (event) => {
    const valueSlider = event.target.value;    
    console.log('usestate', painValue)
    console.log('value', valueSlider)


    switch (true) {
      case (painValue <= 2):
        setColorSlider('success');
        break;
      case (painValue <= 4):
        setColorSlider('secondary');
        break;
      case (painValue <= 6):
        setColorSlider('primary');
        break;
      case (painValue <= 8):
        setColorSlider('warning');
        break;
      default:
        setColorSlider('error');
    }

    functionChangeValue(event)
  }



  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="PainValue"
        value={painValue}
        step={1}
        marks
        min={1}
        max={11}
        color={colorSlider || 'success'}
        onChange={functionChangeValue}
        orientation={width < breakpoint ? 'vertical' : 'horizontal'}
      />
    </Box>
  );
}