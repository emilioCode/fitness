import React from 'react'
import Card from '../components/Card';

import exerciseImg from '../images/exercise.png';
import Welcome from  '../components/Welcome';

class Exercises extends React.Component{
    render(){
        return(
        <div>
            <Welcome 
                title = 'Hello Manuel!'
                message = "Let's workout to get someone gains!"
            />
            <Card 
                title='Technique Guides' 
                description='Learn amazing street workout and calisthenics'
                img={exerciseImg}
                leftColor='#A74CF2'
                righ
                tColor='#617BFB'
            />
        </div>
        )
    }
}

export default Exercises;