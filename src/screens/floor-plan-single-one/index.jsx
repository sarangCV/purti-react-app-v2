import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../components/project-floor-plan';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';

import img1 from '../../assets/project-floor-plan/1.png';
import img2 from '../../assets/project-floor-plan/2.png';

import './style.css';
import FloorSingle from '../../components/project-floor-single/FloorSingle';

const FloorPlanSingle = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 3, itemsToScroll: 2}
      ];

    return (
        <>
            <Navbar title="PROJECT FLOOR PLAN"/>
            <div className="container-sec">
                <div className="border-sec">
                     <div className="dashboard-carousel dashboard-carousel-gallery">
                            <Carousel breakPoints={breakPoints}>
                                <GalleryCard image={img1}/>
                                {/* <GalleryCard image={img2}/> */}
                            </Carousel>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FloorPlanSingle
