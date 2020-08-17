import React from 'react';
import { NavLink } from 'react-router-dom'

import logo from '../../bookworm_logo.png';


const Nav = () => {

    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} display="inline-block" width="40px" />
                <NavLink to="/main/mypage" class="navbar-brand">Bookend</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item searchBookNav">
                            <NavLink to='/main/search' class="nav-link">Search a Book</NavLink>
                        </li>
                        <li class="nav-item mypageNav">
                            <NavLink to='/main/mypage' class="nav-link">My Page</NavLink>
                        </li>
                        <li class="nav-item aboutNav">
                            <NavLink to='/about' class="nav-link">About</NavLink>
                        </li>
                        <li class="nav-item logoutNav">
                            <NavLink to='/' class="nav-link">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <br/>
            
        </>
    )
}

export default Nav