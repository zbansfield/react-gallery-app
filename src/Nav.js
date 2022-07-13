import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

        return (
            <li>
                <NavLink to={`/${props.category}`} onClick={() => props.changeCategory(props.category)}>
                        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
                </NavLink>
            </li>
        )
};

export default Nav;