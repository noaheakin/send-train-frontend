import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const AirbnbSlider = withStyles({
    root: {
      color: '#3a8589',
      height: 3,
      padding: '13px 0',
    },
    thumb: {
      height: 27,
      width: 27,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      marginTop: -12,
      marginLeft: -13,
      boxShadow: '#ebebeb 0 2px 2px',
      '&:focus, &:hover, &$active': {
        boxShadow: '#ccc 0 2px 3px 1px',
      },
      '& .bar': {
        // display: inline-block !important;
        // backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    // active: {},
    // valueLabel: {
    //   left: 'calc(-50% + 12px)',
    //   top: 8,
    //   '& *': {
    //     background: 'transparent',
    //     color: '#000',
    //   },
    // },
    },
    active: {},
    track: {
      height: 3,
    },
    rail: {
      color: '#d8d8d8',
      opacity: 1,
      height: 3,
    },
  })(Slider);

function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar">8</span>
      </span>
    );
}

export default function CustomizedSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 17]);

    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

return (
    <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item>V0</Grid>
            <Grid item xs>
                <AirbnbSlider
                    ThumbComponent={AirbnbThumbComponent}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    // defaultValue={[0, 17]}
                    step={1}
                    marks
                    min={0}
                    max={17}
                    value={value}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>V17</Grid>
        </Grid>
    </div>
)
}