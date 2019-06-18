import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    dest: '',
    multiline: 'Controlled',
  });

  const handleNameChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log("name "+event.target.value)
  };
  const handleDestChange = dest => event => {
    setValues({ ...values, [dest]:event.target.value });
    console.log("dest "+event.target.value)
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Your Name Please...😊"
        className={classes.textField}
        value={values.name}
        placeholder="Your Name Please...😊"
        onChange={handleNameChange('name')}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Your Dream Land"
        style={{ margin: 8 }}
        placeholder="Mention your dream land for team outing 😍"
        fullWidth
        margin="normal"
        value={values.dest}
        onChange={handleDestChange('dest')}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}