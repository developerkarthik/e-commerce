import React, { Component } from 'react';

import styles from './ThemeSwitcher.module.css';

class ThemeSwitcher extends Component {

    render(){
        return (
            <div className={styles.Theme}>
                <span onClick={() => { this.props.themeChange('light')}}>Light</span>
                <span onClick={() => { this.props.themeChange('dark')}}>Dark</span>
            </div>
        )
    }
}

export default ThemeSwitcher;