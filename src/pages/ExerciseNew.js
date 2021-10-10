import React from 'react'

class ExerciseNew extends React.Component{


    handleClick=()=>{
        console.log(this.props)
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}

export default ExerciseNew;