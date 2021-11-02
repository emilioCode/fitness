import React from 'react'
import AddButton from '../components/AddButton';
// import Card from '../components/Card';
import ExcerciseList from '../components/ExerciseList';
// import exerciseImg from '../images/exercise.png';
import Welcome from  '../components/Welcome';
import Loading from  '../components/Loading';
class Exercises extends React.Component{
    
    state = {
        data: [],
        loading:false,
        error:null
        //    data: [{
        //     "id": 1,
        //     "title": "Technique Guides",
        //     "description": "Learn amazing street workout and calisthenics",
        //     "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
        //     "leftColor": "#A74CF2",
        //     "rightColor": "#617BFB"
        // },{
        //     "id": 2,
        //     "title": "Skills Training",
        //     "description": "Learn the secrets of bodyweight techniques",
        //     "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
        //     "leftColor": "#17EAD9",
        //     "rightColor": "#6078EA"
        // },{
        //     "id": 3,
        //     "title": "Strength Training",
        //     "description": "Train anytime, everywere and become a superhero!",
        //     "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
        //     "leftColor": "#FAD961",
        //     "rightColor": "#F76B1C"
        // }]
    }
    
    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () =>{
        try {
            this.setState({
                loading: true
            })
            let res  = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            console.log(data)
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                data:[],
                loading: false,
                error
            })
            console.log(this.state.error)
        }

    
    }

    render(){
        return(
        <React.Fragment>
            <Welcome 
                title = 'Hello Manuel!'
                message = "Let's workout to get someone gains!"
            />
            <Loading visible={this.state.loading}/>
            <ExcerciseList data={this.state.data}/>
            <AddButton to="/exercise/new" alt="exercise"/>
            {
                
                
                // this.state.data.map((e)=>{
                //     return(
                //         <Card key={e.id} 
                //         title={e.title}
                //         description={e.description}
                //         img={e.img} 
                //         leftColor={e.leftColor}
                //         rightColor={e.rightColor}
                //         />
                //     )
                // })

                // <Card 
                // title='Technique Guides' 
                // description='Learn amazing street workout and calisthenics'
                // img={exerciseImg}
                // leftColor='#A74CF2'
                // rightColor='#617BFB'
                // />
             }

        </React.Fragment>
        )
    }
}

export default Exercises;