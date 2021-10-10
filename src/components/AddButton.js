import React from 'react';
import './styles/AddButton.css';
import buttonImg from  '../images/add.png';
import { Link } from 'react-router-dom';

const AddButton = ({to,alt})=>(
    <Link to={to}>
        <img src={buttonImg} className="Fitness-Add" alt={alt}/>
    </Link>
)
// const AddButton = (props) =>{
//     return(
//         <Link to={props.to}>
//             <img src={buttonImg} className="Fitness-Add" alt={props.alt}/>
//         </Link>
//         // <a href={props.to}>
//         //     <img src={buttonImg} className="Fitness-Add" alt={props.alt}/>
//         // </a>
//     )
// }

export default AddButton;