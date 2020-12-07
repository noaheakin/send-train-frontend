import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// const classes = useStyles();

const MoreTesting =({handleSelectChange}) => {

  return (
    <div>
      <FormControl className="climbSorter">
        <InputLabel htmlFor="grouped-select">Sort Climbs</InputLabel>
        <Select defaultValue="" id="grouped-select" onChange={(e) => handleSelectChange(e)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>By Rating</ListSubheader>
          <MenuItem value={1}><i class="small star outline icon"/>Highest Quality</MenuItem>
          <MenuItem value={2}><i class="small star icon"/>Lowest Quality</MenuItem>
          <ListSubheader>By Popularity</ListSubheader>
          <MenuItem value={3}><i class="sort amount up icon"/>Most Popular</MenuItem>
          <MenuItem value={4}><i class="sort amount down icon"/>Least Popular</MenuItem>
          <ListSubheader>By Name</ListSubheader>
          <MenuItem value={5}><i class="sort alphabet down icon"/>A to Z</MenuItem>
          <MenuItem value={6}><i class="sort alphabet up icon"/>Z to A</MenuItem>
        </Select>
        <FormHelperText>Sort by attributes</FormHelperText>
      </FormControl>
    </div>
  )
}

export default MoreTesting