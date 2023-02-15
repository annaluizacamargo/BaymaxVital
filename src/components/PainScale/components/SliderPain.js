import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderPain(props) {
  const colorSlider = props.colorSlider;
  const functionChangeValue = props.changeValue;
  const painValue = props.value;

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 760;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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