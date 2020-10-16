import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root:{
    backgroundColor: '#006d77',
    height: '80px',
    display: 'flex',
    flexDirection: 'row'

}
})


function AppHeader(){
  const classes = useStyles();


  return (
    <AppBar position="static" classes={{root: classes.root}}>
      <Toolbar>
        <div className='button-container'>
          <Button color="inherit">Plant Care</Button>
          <Button color="inherit">Photo Gallery</Button>
          <Button color="inherit">Pots</Button>
          <Button color="inherit">Plant Hangers</Button>
        </div>
      </Toolbar>
    </AppBar>



  );
}

export default AppHeader;
