import React from 'react';
import projectLogo from '../../assets/project-home/project-logo.jpg';
import project_info from '../../assets/project-info/1.png'
import Card from '../../components/project-home/Card';
import { useHistory } from 'react-router-dom';
// importing logos
import { apartment, apartment_grey, floor_plan, floor_plan_two, gallery, galler_two, info, info_two, inventory, inventory_two, walkthrough, walkthrough_two } from '../../assets/icons';
import Navbar from '../../components/navbar';

import './style.css';

const ProjectHome = () => {

    const history = useHistory();

    return (
        <>
            <Navbar title="PROJECT HOME"/>
            <div className="container-sec container-sec-project-home">
                <div className="border-sec border-sec-project-home">
                    <div className="container">
                        <div className="project-info-title">
                            <h1>A premium address with a glorious heritage</h1>
                            <p>Nestled amidst a location with a glorious heritage, Purti Hastings offers exclusivity, peace and a 
                                chance to reconnect with yourself. Being centrally located and well-connected to the corporate, 
                                cultural and social hub of the city, ensures that your requirements are equally taken care of.</p>
                        </div>
                        <div className="project-info-content">
                            <h2>Amenities & Facilities</h2>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 project-info-img-sec">
                                    <img className="project-info-img" src={project_info} alt="img" />
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <ul>
                                        <li>Swimming Pool on Terrace</li>
                                        <li>Temple</li>
                                        <li>Gymnasium</li>
                                        <li>Games Room</li>
                                        <li>Automatic high speed elevator</li>
                                        <li>Driver’s utility area</li>
                                        <li>Video door phone</li>
                                        <li>CCTV surveillance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectHome;
