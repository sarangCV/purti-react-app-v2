import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../components/project-floor-plan';
import Navbar from '../../components/navbar';


import { useHistory } from 'react-router-dom';


import './style.css';

const FloorPlan = () => {

    const history = useHistory();

    return (
        <>
            <Navbar title="PROJECT FLOOR PLAN"/>
            <div className="container-sec">
                <div className="border-sec">
                    <div className="container">
                        <div className="project-home-menu project-home-menu-floor-plan">
                            <Card title="3 BHK" onClick={()=> history.push('/floor-plan-single-one')}/>
                            <Card title="4 BHK" onClick={()=> history.push('/floor-plan-single-two')}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FloorPlan
