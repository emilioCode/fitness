import React from 'react';
import './styles/Welcome.css'

function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Welcome;