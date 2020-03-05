import React, { Component } from 'react';

import Logo from './Logo/Logo';
import NavLink from './NavLink/NavLink';
import styles from './Header.module.css';

import { ThemeContext } from '../context/Context'

import { connect } from 'react-redux'; 
import * as actions from '../../store/actions';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            loginStatus: false
        }
    }
    static contextType = ThemeContext;
    
    render(){
        let theme = this.context;
        return (
            <header className={styles.Header} style={{ backgroundColor: theme.background }}>
                <nav>
                    <ul>
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                        <NavLink to="/products">
                            Products
                        </NavLink>
                        <NavLink to="/settings">
                            Settings
                        </NavLink>
                        <NavLink to="/posts">
                            Posts
                        </NavLink>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        { (this.props.isAuth) ? <button onClick={this.props.logout}>Logout</button> : <button onClick={this.props.login}>Login</button> }
                    </ul>
                </nav>
            </header> 
        );
    }
}

const mapStatetoProps = state => {
    return {
        isAuth: state.isAuthenticate
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        login: () => dispatch(actions.loginAction()),
        logout: () => dispatch(actions.logoutAction())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);