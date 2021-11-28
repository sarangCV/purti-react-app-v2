import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const PrivateRoute = ({children, ...rest}) => {

    const { user, testText } = useUserContext();

    // console.log('user data from privateroute', testText);

    console.log('User from privateroute is', user);

    return (
        <Route {...rest} render={(props) => 
            user ? (
                children
            ) : (
                <Redirect to={{ pathname: '/', state: {from: props.location} }} />
            )
            }/>
    )
}

export default PrivateRoute
