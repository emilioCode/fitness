import React from 'react'
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';

class ExerciseNew extends React.Component{

    state = {
        form:{
            key:'',
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    render(){
        return (
            
            <div className="row" >
                <div className="col-sm" style={{margin:"5px 0px 0px 0px"}}>
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm" style={{margin:"5px 0px 0px 0px"}}>
                    <ExerciseForm onChange={this.handleChange} form={this.state.form}/>
                </div>
            </div>
        )
    }
        
    
}

export default ExerciseNew;