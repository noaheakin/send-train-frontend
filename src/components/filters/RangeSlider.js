// Range slider with two tabs to bookend desired difficulty range. 
// This particular slider is just for the bouldering discipline
// Need to learn more about hooks to derive values which can then be used
// to filter searches to the API

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 17]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography className="slider-label" gutterBottom>
        Difficulty Range
      </Typography>
      <Grid container spacing={2}>
        <Grid item>V0</Grid>
      <Grid item xs>
      <Slider
        className="slider"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks
        min={0}
        max={17}
        
      />
      </Grid>
        <Grid item>V17</Grid>
      </Grid>
    </div>
  );
}