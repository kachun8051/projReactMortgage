import React from 'react';
import Slider from "@mui/material/Slider";
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const SliderToolbar = (props) => {

  let caption1, caption2, caption3;
  if (!props.suffix){
    caption1 = props.unit + " " + props.value;
    caption2 = props.unit + " " + props.min;
    caption3 = props.unit + " " + props.max;
  } else {
    caption1 = props.value + " " + props.unit;
    caption2 = props.min + " " + props.unit;
    caption3 = props.max + " " + props.unit;
  }

  return (
    <>
      <Stack spacing={0}>
        <Typography variant="subtitle2">{props.label}</Typography>
        <Typography variant="h5">{caption1}</Typography>
      </Stack>
      <Slider
        min={props.min}
        max={props.max} 
        value={props.value} 
        aria-label="Default" 
        valueLabelDisplay="auto"
        marks 
        step={props.step}
        onChange={props.onChange}
      />
      <Stack direction={"row"} justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">{caption2}</Typography>
        <Typography variant="caption" color="text.secondary">{caption3}</Typography>
      </Stack>
    </>    
  )
}

export default SliderToolbar;