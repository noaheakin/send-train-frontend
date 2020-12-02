import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="discipline-native-helper">Select Type</InputLabel>
            <NativeSelect
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'discipline',
                id: 'discipline-native-helper',
              }}
            >
              <InputLabel htmlFor="grouped-select">Sort Results</InputLabel>
              <option aria-label="None" value="All"></option>
              <option value='Boulder'>Boulder</option>
              <option value='Sport'>Sport</option>
              <option value='Trad'>Trad</option>
              <option value='Alpine'>Alpine</option>
            </NativeSelect>
        <FormHelperText>Filter by climbing style</FormHelperText>
    </FormControl>
  )
}