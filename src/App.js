import React, { Component } from 'react';
import './App.css';
import Question from './Components/Question/Question'
import UniversalSlider from './Components/UniversalSlider/UniversalSlider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


class App extends Component{
  render () {
    return (
      <div className="App">
        
        <Grid 
          container
          direction="column"
          justify="center"
          alignItems="center"
          
          >
            <Grid container xs={12} sm={8} md={6} lg={4} xl={4}>
              <Box width="100%">
                <UniversalSlider flexGrow={1} percentage = "83"/>
              </Box>
              <Box width="100%">
                <Question question="Are you a good listener?"/>
                <Question question="how often do you manage to meet your deadlines at work?"/>
              </Box>
            </Grid>
        </Grid>
      </div>
    );
  }
  
}


export default App;
