// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Card from './components/Card';

import exerciseImg from './components/images/exercise.png';

class App extends React.Component{
  

  render(){
    return (
      <Card 
        title='Technique Guides' 
        description='Learn amazing street workout and calisthenics'
        img={exerciseImg}
        leftColor='#A74CF2'
        rightColor='#617BFB'
      />
    )
  }
}


export default App;
