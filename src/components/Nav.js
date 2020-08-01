import React from 'react'

import { FaHome, FaList, FaCalendarDay } from 'react-icons/fa';
import '../stylesheets/index.css';
import { Link } from 'react-router-dom';


export const Nav = () => {
    return(
        <div className="nav">
            <Link to="">
                <FaHome/>
            </Link>

            <Link to='/add'>
                <FaCalendarDay/>
            </Link>

            <Link to ="/list">
                <FaList/>   
            </Link>
        </div>
    )
}