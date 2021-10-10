// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Exercises from './pages/Exercises'
import ExerciseNew from './pages/ExerciseNew'
import NotFound from './pages/NotFound'

class App extends React.Component{

  render(){
    return(
      

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Exercises}/>
          <Route exact path='/exercise' component={Exercises}/>
          <Route exact path='/exercise/new' component={ExerciseNew}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
