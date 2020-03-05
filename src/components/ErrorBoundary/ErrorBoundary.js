import React, { Component } from 'react';

class ErrorBoundary extends Component{
    // constructor(){
    //     super();
        // this.state = {
        //     hasError: false
        // }
    // }

    // static getDerivedStateFromError(error){
    //     console.log(this.state.hasError);
    // }

    // componentDidCatch(error, errorInfo){
    //     console.log(error);
    // }

    render(){
        if(this.props.hasError){
            return(
                <p>Error....</p>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;