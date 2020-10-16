import React from 'react';
import './App.css';
import AppHeader from './components/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//   root:{
//     backgroundColor: '#FEFAE0',
//     height: '100vh'
//
//   }
// })

function App() {
  // const classes = useStyles();

  return (
    <div className='app'>
      <AppHeader />
      <div >
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper> xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>

        </Grid>


      </div>
    </div>
  );
}

export default App;
