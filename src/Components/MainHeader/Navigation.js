import React from 'react';
import classes from './Navigation.module.css';

const Navigation = (props) => {
    //propstan kelgen znacheynialar tuura bolso Navigation ishteit
    return (
        <nav className={classes.nav}>
            <ul>
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {props.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {/* props tan isLoggedIn sostoiania kelip jatat al true/falce kelse logout degen button chygat */}
                {props.isLoggedIn && (
                    <li>
                        <button onClick={props.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
            
        </nav>
    )
}

export default Navigation
