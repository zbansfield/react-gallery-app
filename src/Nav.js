import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <li>
                <NavLink to={`/${this.props.category}`} onClick={() => this.props.changeCategory(this.props.category)}>
                        {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}

                </NavLink>
            </li>
        )
    }
};

export default Nav;