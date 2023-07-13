import React from 'react';
import Slider from "@mui/material/Slider";
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const SliderToolbar = (props) => {
  return (
    <>
      <Stack spacing={0}>
        <Typography variant="subtitle2">{props.label}</Typography>
        <Typography variant="h5">{props.unit} {props.value}</Typography>
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
        <Typography variant="caption" color="text.secondary">{props.unit} {props.min}</Typography>
        <Typography variant="caption" color="text.secondary">{props.unit} {props.max}</Typography>
      </Stack>
    </>    
  )
}

export default SliderToolbar;