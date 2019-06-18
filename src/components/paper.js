import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/CloseIcon';

const firebaseConfig = {
  apiKey: "AIzaSyDHzZB_HLY6ZiV-14G4iIz1U2kb3JC9PDo",
  authDomain: "login2-4a4fd.firebaseapp.com",
  databaseURL: "https://login2-4a4fd.firebaseio.com",
  projectId: "login2-4a4fd",
  storageBucket: "login2-4a4fd.appspot.com",
  messagingSenderId: "190833033056",
  appId: "1:190833033056:web:33dae81cf9dd9281"
};

var db = firebase.initializeApp(firebaseConfig);


const useStyles = makeStyles(theme =>({
  card: {
    minWidth: 275,
  },
  close: {
    padding: theme.spacing(0.5),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
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

export default function SimpleCard() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    dest: '',
    valid: true,
    isSuccess: false,
  });
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(true);
  }
  function handleSuccess(){
    values.isSuccess = true;
    setOpen(true);
  }
  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  const handleNameChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDestChange = dest => event => {
    setValues({ ...values, [dest]:event.target.value });
    
  };

  const onClick=(name,dest)=>{
    if(name === "" || dest === "") {
      handleClick();
      return values.valid=false;
    }
    
    db.database().ref('dreamlist/').push({
      name,
      dest
  }).then((data)=>{
     
      handleSuccess();
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
  
  }
  return (
   <div>
     {values.valid ? '' :  <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Please add your name and dream outing spot.</span>}
        action={[
          // <Button key="X" color="secondary" size="small" onClick={handleClose}>
          //   <b>X</b>
          // </Button>,
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            {/* <CloseIcon /> */}
          </IconButton>,
        ]}
      />}
      { values.isSuccess ? <Card className={classes.card} style={{backgroundColor:'#ffedff'}}>
      <CardContent>
        <h2>Hurray !! Your Submission Is Successful!!<span role="img" aria-label="party poppers">🎉🎉</span></h2>
        <h3>Wishing Your Dream Team Outing  Destination Will Be Selected!!<span role="img" aria-label="thumbs up">👍</span></h3>
      </CardContent>
      </Card>:
    <Card className={classes.card} style={{backgroundColor:'#ffedff'}}>
      <CardContent>
          <h3>Let's Rock n Roll This Summer Outing!!</h3>
          <h1><span role="img" aria-label="yo">🤟</span></h1>
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
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" color="secondary" style={{marginLeft:'10px'}} onClick={()=>onClick(values.name, values.dest)}>Submit</Button>
      </CardActions>
    </Card>}
    </div>
  );
}