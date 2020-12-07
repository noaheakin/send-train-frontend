import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   },
// }));

// console.log(state.discipline)

const DisciplineSelect = ({handleDisciplineChange}) => {

  return (
    <FormControl className="disciplineSelector">
        <InputLabel htmlFor="discipline-native-helper">Select Type</InputLabel>
        <Select defaultValue="" id="grouped-select" onChange={(e) => handleDisciplineChange(e)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>              
          <MenuItem value={1}>Boulder</MenuItem>
          <MenuItem value={2}>Sport</MenuItem>
          <MenuItem value={3}>Trad</MenuItem>
          </Select>
        <FormHelperText>Filter by climbing style</FormHelperText>
    </FormControl>
  )
}

export default DisciplineSelect