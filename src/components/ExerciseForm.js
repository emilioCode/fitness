import React from 'react'

class ExerciseForm extends React.Component{

    state = {}



    render(){
        const { onChange, onSubmit, form }  = this.props;
        return(
            <div className="container">
                <form
                onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="title" name="title"
                         value={form.title} onChange={onChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="description" name="description"
                         value={form.description} onChange={onChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="img" name="img"
                         value={form.img} onChange={onChange}></input>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="leftColor" name="leftColor"
                             value={form.leftColor} onChange={onChange}></input>
                        </div>
                        <div className="col"> 
                            <input type="text" className="form-control" placeholder="rightColor" name="rightColor"
                             value={form.rightColor} onChange={onChange}></input>
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

export default ExerciseForm;