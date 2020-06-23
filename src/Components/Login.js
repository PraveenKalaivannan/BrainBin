import React, { Component } from 'react'
import Header from './Header'
import LoginForm from './LoginForm'


class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
                <LoginForm/>
            </div>
        )
    }
}


export default Login;