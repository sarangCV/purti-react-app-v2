import React from 'react';
import project_one from '../../assets/dashboard/assets-02.png'
import './style.css'

const DashboardCard = ({title, onClick}) => {
    return (
        <div className="dashboard-card" onClick={onClick}>
            {/* <h2>{title}</h2> */}
            <img src={project_one} alt="" />
        </div>
    )
}

export default DashboardCard
