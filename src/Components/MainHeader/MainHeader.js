import React from 'react';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';

//app.js ten kelgen propstardy Navigation ge otkorup beret
const MainHeader = (props) => {
    return (
        <header className={classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation ilLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
            
        </header>
    )
}

export default MainHeader;
