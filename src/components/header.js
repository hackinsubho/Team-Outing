import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static"  color="secondary">
        <Toolbar>
          <h1>
            Team Outing July 2019
          </h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}