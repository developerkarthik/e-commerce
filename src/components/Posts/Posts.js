import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Posts extends Component{

    constructor(){
        super();
        this.state = {
            posts: [],
            fetched: false,
            hasError: false
        }
    }
    componentDidMount(prevProps, prevState){
        // try{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                if(Object.keys(data).length !== 0){
                    this.setState({
                        posts: this.state.posts.concat(data),
                        fetched: true
                    });
                }
            }).catch(err => {
                console.log(err);
                this.setState({
                    ...this.state,
                    hasError: true
                });
            });
        // }catch{
        //     throw new Error('Something Wrong!!..');
        // }
    }


    render(){
        let posts = <p>Loading....</p>;
        if(this.state.fetched){
            posts = <p>No Posts found...</p>;
        }
        console.log(this.state.posts);
        if(this.state.posts.length !== 0){
            posts = this.state.posts.map((data) => {
                return(
                   <div key={data.id} className="Box">
                       <h4>{ data.title }</h4>
                       <p>{ data.body }</p>
                   </div>
               );
           });
        }

        
        return (
            <ErrorBoundary hasError={this.state.hasError}>
               { posts } 
            </ErrorBoundary>    
        );
    }
}

export default Posts;