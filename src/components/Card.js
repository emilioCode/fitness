import React from 'react';
import circlesImg from '../images/circles.png';
import './styles/Card.css';

class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            image: ''
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image: this.props.img
            });
        },1000)
    }
    
    render(){
        const { title, description, img, leftColor, rightColor } = this.props;
        return (
           <div className="card mx-auto Fitness-Card"
           style={{
            backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
           }}
           >
               <div className="card-body">
                   <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default Card;