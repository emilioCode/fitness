import React from 'react'
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import FatalError from './500';
import NotFound from './404';

class ExerciseNew extends React.Component{

    state = {
        form:{
            key:0,
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        loading: false,
        error: null
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

    handleSubmit= async (e) =>{
        this.setState({
            loading:true
        })
        e.preventDefault()
        try {
            debugger
            let config = {
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json  = await res.json()

            this.setState({
                loading:false
            })

            console.log(json)

            this.props.history.push('/exercise') // the navegation into the react-router
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
        }

        console.log(this.state)
    }

    render(){
        if(this.state.error)
            return <FatalError/>

        return (
            
            <div className="row" >
                <div className="col-sm" style={{margin:"5px 0px 0px 0px"}}>
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm" style={{margin:"5px 0px 0px 0px"}}>
                    <ExerciseForm 
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                    />
                </div>
            </div>
        )
    }
        
    
}

export default ExerciseNew;