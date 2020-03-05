// @flow

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Posts from './components/Posts/Posts';
import Login from './components/Login/Login';

import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Loader from './components/Loader/Loader';

import { ThemeContext, themes } from './components/context/Context';

import { connect } from 'react-redux';

class App extends Component {
    constructor(){
        super();
        this.state = {
            defaultTheme: themes.light
        }
    }

    //static contextType = ThemeContext;
    
    toggleTheme = (theme) => {
        // this.setState((state) => {
        //     defaultTheme: themes.light
        // });
        this.setState((state) => ({
            defaultTheme: theme === 'light' ? themes.light : themes.dark
        }));
        console.log(this.contextType);
    }

  render() {
    return(
      <>
          { (this.props.isLoader) ? <Loader /> : '' } 
          <ThemeSwitcher themeChange={this.toggleTheme}/>
          <ThemeContext.Provider value={this.state.defaultTheme}>
            <Header/>        
          </ThemeContext.Provider>
            <main>
                <Switch>
                    <Route exact path="/">
                        <p>Home Page</p>
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/settings">
                        <p>Settings placeholder</p>
                    </Route>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </main>
          <Footer />
      </>
    );
  }
}

const mapStatetoProps = state => {
    return {
        isLoader : state.loader
    }
}

export default withRouter(connect(mapStatetoProps)(App));
//export default App;
