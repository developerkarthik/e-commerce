import React, {Component} from 'react';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });

        this.validation();
    }

    validation = () => {
        // if(this.state.username){
        //     let username = this.state.username;
        //     let regex = /^[a-zA-Z]+$/;
        //     if(username.test(regex)){
        //         console.log('Letters Only.....')
        //     }else{
        //         console.log('Numbers not allowed, Letters Only.....')
        //     }
        // }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <label>Username:</label><br/>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                <label>Password:</label><br/>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
                <button>Login</button>
            </form>
        );
    }
}

export default Login;