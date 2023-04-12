import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FilterContext } from '../context/FilterContext';
import { useContext } from "react";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const {value_1,setValue_1,value_2,setValue_2} = useContext(FilterContext)

  // const [value1, setValue1] = React.useState(20);
  // const [value2, setValue2] = React.useState(37);
  


  const handleChange = (event, newValue) => {
    setValue_1(newValue[0]);
    setValue_2(newValue[1])
  };

  return (
    <Box sx={{ width: 300 }}>
      <div className="inputs">
                  <input className="input-price" type="text" 
                  value={value_1}
                  /> -{" "}
                  <input className="input-price" type="text" name="" id="" 
                   value={value_2}/>
                </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[value_1,value_2]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}