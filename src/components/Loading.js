import React from 'react'
import './styles/Loading.css'



class Loading extends React.Component{

    render(){
        const { visible } = this.props;
        if(visible === true)
        return(
            <div className="loader">Loading...</div>
        )
        else
        return(
            <span></span>
        )
    }
}

export default Loading;