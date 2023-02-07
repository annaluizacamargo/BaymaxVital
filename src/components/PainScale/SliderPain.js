import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { createTheme } from '@mui/material/styles';
import { useState } from "react";

const themeSlider = createTheme({
  success: {
    success: '#e53e3e',
  },
  secondary: {
    secondary: '#9c27b0',
  },
  primary: {
    primary: '#1e79d3',
  },
  warning: {
    warning: '#ed6c02',
  },
  error: {
    error: '#d32f2f',
  },
});



function valuetext(value) {
  //console.log('value', value)
  return value;
}

//const colorSlider = (value) => {
//  //console.log(value)
//  if (value == 0 || value == 1 || value == 2) {
//    console.log(document.getElementById('slider'))
//    //document.querySelector('.slider').firstElementChild
//    console.log(themeSlider.success.success)
//    //return colorSliderNow = themeSlider.success.success   
//  }  else if (value == 3 || value == 4) {
//    console.log(themeSlider.secondary.secondary)
//    //return themeSlider.secondary.secondary   
//  }
//}

export default function SliderPain() {
  const [colorSlider, setColorSlider] = useState('');

  const OnChange = (props) => {
    console.log(props.target.value)
    const valueSlider = props.target.value
    if (valueSlider == 0 || valueSlider == 1 || valueSlider == 2) {
      console.log('verde')
    } else if (valueSlider == 3 || valueSlider == 4) {
      console.log('roxo')
    } else if (valueSlider == 5 || valueSlider == 6) {
      console.log('azul')
    } else if (valueSlider == 7 || valueSlider == 8) {
      console.log('laranja')
    } else {
      console.log('vermelho')
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
        color={colorSlider == ''? 'primary' : OnChange}
        onChange={OnChange}

      />
    </Box>
  );
}
