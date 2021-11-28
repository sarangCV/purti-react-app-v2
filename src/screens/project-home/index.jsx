import React from 'react';
import projectLogo from '../../assets/project-home/project-logo.jpg';
import project_one from '../../assets/dashboard/assets-02.png'
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
                        <div className="project-home-header">
                            {/* <div className="project-logo">
                                    <img src={project_one} alt="logo" />
                            </div> */}
                            <div className="project-info">
                                    <div className="project-info-inner-row project-info-inner-row-first">
                                        <div className="col-3">3 BHK</div>
                                        <div className="col-3"><img src={apartment} /></div>
                                        <div className="col-4">AVAILABLE</div>
                                    </div>
                                    <div className="project-info-inner-row">
                                        <div className="col-3">4 BHK</div>
                                        <div className="col-3"><img src={apartment_grey} /></div>
                                        <div className="col-4">SOLD OUT</div>
                                    </div>
                                    {/* <div className="project-info-inner-row">
                                        <div className="col-3">2.5 BHK</div>
                                        <div className="col-3"><img src={apartment} /></div>
                                        <div className="col-4">AVAILABLE</div>
                                    </div>
                                    <div className="project-info-inner-row">
                                        <div className="col-3">3 BHK</div>
                                        <div className="col-3"><img src={apartment_grey} /></div>
                                        <div className="col-4">SOLD OUT</div>
                                    </div> */}
                            </div>
                        </div>
                        <div className="project-home-menu">
                            <Card img={galler_two} title="GALLERY" onClick={()=>history.push('/project-gallery')}/>
                            <Card img={floor_plan_two} title="FLOOR PLAN" onClick={()=>history.push('/project-floor-plan')}/>
                            <Card img={floor_plan_two} title="MASTER PLAN" onClick={()=>history.push('/project-master-plan')}/>
                            <Card img={info_two} title="INFO" onClick={()=>history.push('/project-info')}/>
                            <Card img={walkthrough_two} title="WALK THROUGH" onClick={()=>history.push('/project-walkthrough')}/>
                            <Card img={inventory_two} title="INVENTORY" onClick={()=>history.push('/project-inventory')}/>
                        </div>
                        <div className="project-home-footer">
                            <button className="btn btn-primary login-btn" type="submit" onClick={()=>history.push('/price-sheet')}>
                                Pricing
                            </button>
                            <button className="btn btn-primary login-btn" type="submit" onClick={()=>history.push('/booking-form')}>
                                Send Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectHome;
