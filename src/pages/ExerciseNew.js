import React from 'react'

class ExerciseNew extends React.Component{

    state = {}
    handleSubmit= e =>{
        e.preventDefault()
        console.log(this.state)
    }
    handleChange=(e)=>{
        // console.log(e.target.name + ": "+e.target.value)
        let partialState = {}
        partialState[e.target.name]= e.target.value
        this.setState(partialState)
    }
    render(){
        return(
            <div className="container">
                <form
                onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="title" name="title"
                         value={this.state.title} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="description" name="description"
                         value={this.state.description} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="img" name="img"
                         value={this.state.img} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="leftColor" name="leftColor"
                             value={this.state.leftColor} onChange={this.handleChange}></input>
                        </div>
                        <div className="col"> 
                            <input type="text" className="form-control" placeholder="rightColor" name="rightColor"
                             value={this.state.rightColor} onChange={this.handleChange}></input>
                        </div>
                    </div>

            <button type="submit" className="btn btn-primary float-right">
                Submit
            </button>
                </form>
            </div>
        )
    }
}

export default ExerciseNew;