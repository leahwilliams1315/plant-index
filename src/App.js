import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './components/AppBar';
import Paper from '@material-ui/core/Paper';
import { PlantCard } from './components/PlantCard'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root:{
    backgroundColor: '#FEFAE0',
  }
})

function App() {

  const [plantList, updatePlantList] = useState([])

  useEffect(() => {
      fetch('https://trefle.io/api/v1/plants?token=oBnOBAsB-pOkfOaFkSmdjOLMvXceZ9kHLFrP2jicaz4')
        .then(resp => resp.json())
        .then(jsonResp => updatePlantList(jsonResp.data))

    }, []
  );


  const classes = useStyles();

  return (
    <div className='app'>
      <AppHeader />
      <div className={classes.root}>



        {plantList.map(plant => <PlantCard
                                  plantName={plant.common_name}
                                  image={plant.image_url}
                                  />
        )}


      </div>
    </div>
  );
}

export default App;
