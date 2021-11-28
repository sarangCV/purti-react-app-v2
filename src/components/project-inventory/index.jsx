import React from 'react';
import './style.css'

const InventoryCard = ({title, data}) => {

    console.log(data);

    return (
        <div className="inventory-card-container">
            <h5>{title}</h5>
            {data.map((v) => {
                return(
                    <div className="inventory-single-block" style={{ backgroundColor: `${v.status === 'sold' ? '#9b9b9b' : '#e1e1e1' }`, color: `${v.status === 'sold' ? '#fff' : '#4a2e23' }`, cursor: `${v.status === 'sold' ? 'not-allowed' : 'pointer' }` }}>{v.number}{v.status !== 'sold' ? <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{marginLeft: 10, marginBottom: 2}}></input> : null}</div>
                )
            })}
        </div>
    )
}

export default InventoryCard;


