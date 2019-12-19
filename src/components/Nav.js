import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <div className='navbar'>
            <div className='container'>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName="active"> Liste des offres </NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' activeClassName="active"> Mon profil </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Nav;