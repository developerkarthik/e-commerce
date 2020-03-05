import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../context/Context'

class NavLink extends Component{
    static contextType = ThemeContext;
    render(){
        let theme = this.context;
        return (
            <li>
                <Link to={this.props.to} {...this.props} style={{ color: theme.color }}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

export default NavLink;