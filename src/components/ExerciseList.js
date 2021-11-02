import React from 'react';
import Card from '../components/Card';

const ExcerciseList = ({data})=>(
    <React.Fragment>
    {
        data.map((e)=>(
        <Card key={e.id} 
            title={e.title}
            description={e.description}
            img={e.img} 
            leftColor={e.leftColor}
            rightColor={e.rightColor}
        /> 
        ))
    }
    </React.Fragment>
)
// function ExcerciseList(props){
//     return (
//         props.data.map((e)=>{
//             return(
//                 <Card key={e.id} 
//                 title={e.title}
//                 description={e.description}
//                 img={e.img} 
//                 leftColor={e.leftColor}
//                 rightColor={e.rightColor}
//                 />
//             )
//         })
//     )
// }

export default ExcerciseList;