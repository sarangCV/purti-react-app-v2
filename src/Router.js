import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

// Import routes
import SignUp from './screens/admin/sign-up';

import Login from './screens/login';
import CustomerEntry from './screens/customer-entry';
import Dashboard from './screens/dashboard';
import ProjectHome from './screens/project-home';
import ProjectGallery from './screens/project-gallery';
import ProjectWalkthrough from './screens/project-walkthrough';
import ProjectFloorPlan from './screens/project-floor-plan';
import FloorPlanSingleOne from './screens/floor-plan-single-one';
import FloorPlanSingleTwo from './screens/floor-plan-single-two';
import ProjectMasterPlan from './screens/project-master-plan';
import ProjectInfo from './screens/project-info';

import ProjectInventory from './screens/project-inventory';
import PriceSheet from './screens/project-price-sheet';
import BookingForm from './screens/booking-form';

import PrivateRoute from './screens/PrivateRoute';
import { useUserContext } from './context/userContext';
// import { useUserContext } from '../context/userContext';


const Router = () => {

    const { user, testText, loading } = useUserContext();

    console.log('user data from router', loading);

    return (
        <BrowserRouter>
            {!loading &&  

            <Switch>

                {/* SING UP ROUTE */}
                <Route exact path="/sign-up" component={SignUp}></Route>

                {/* LOGIN ROUTE */}
                <Route exact path="/" component={Login}></Route>

                {/* CUSTOMER ENTRY SCREEN ROUTE */}
                <PrivateRoute path="/customer-entry" user={user} isLoading={loading}><CustomerEntry/></PrivateRoute>
                {/* DASHBOARD SCREEN ROUTE */}
                <PrivateRoute path="/dashboard"><Dashboard/></PrivateRoute>
                {/* PROJECT HOME SCREEN ROUTE */}
                <PrivateRoute path="/project-home"><ProjectHome/></PrivateRoute>
                {/* PROJECT GALLERY SCREEN ROUTE */}
                <PrivateRoute path="/project-gallery"><ProjectGallery/></PrivateRoute>
                {/* PROJECT GALLERY SCREEN ROUTE */}
                <PrivateRoute path="/project-walkthrough"><ProjectWalkthrough/></PrivateRoute>
                {/* PROJECT FLOOR PLAN SCREEN ROUTE */}
                <PrivateRoute path="/project-floor-plan"><ProjectFloorPlan/></PrivateRoute>
                <PrivateRoute path="/floor-plan-single-one"><FloorPlanSingleOne/></PrivateRoute>
                <PrivateRoute path="/floor-plan-single-two"><FloorPlanSingleTwo/></PrivateRoute>
                {/* PROJECT MASTER PLAN SCREEN ROUTE */}
                <PrivateRoute path="/project-master-plan"><ProjectMasterPlan/></PrivateRoute>
                {/* PROJECT INFO SCREEN ROUTE */}
                <PrivateRoute path="/project-info"><ProjectInfo/></PrivateRoute>
                {/* PROJECT INVENTORY SCREEN ROUTE */}
                <PrivateRoute path="/project-inventory"><ProjectInventory/></PrivateRoute>
                {/* PRICE LIST SCREEN ROUTE */}
                <PrivateRoute path="/price-sheet"><PriceSheet/></PrivateRoute>
                {/* BOOKING FORM SCREEN ROUTE */}
                <PrivateRoute path="/booking-form"><BookingForm/></PrivateRoute>

            </Switch>}
           
        </BrowserRouter>
    )
}

export default Router
