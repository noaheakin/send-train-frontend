import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating({stars, starVotes}) {
const classes = useStyles();
console.log(stars)
  return (
    <div className="starRating">
      <Rating name="half-rating-read" defaultValue={stars} precision={0.1} readOnly /><p>(from {starVotes} votes)</p>
    </div>
  );
}