import React from 'react';
import './style.css'

const Card = ({img, title, onClick}) => {
    return (
        <div className="card-project-home" onClick={onClick}>
            <img src={img} alt="gallery" />
            <h3>{title}</h3>
        </div>
    )
}

export default Card
