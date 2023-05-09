import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props){
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className ="content">
                <p className="card-title">{props.name}</p>
                <p class="proj-icons-container">
                    <a href={props.github}></a>
                    <a href={props.deploy}></a>
                </p>
            </div>
        </div>
    )
}

export default ProjectCards;