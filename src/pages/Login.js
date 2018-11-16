import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startProfileLoad } from '../profile';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { login } from '../login';

function Home ({ history, startProfileLoad, loginAction, loginState }) {
    const [ login, setLogin ] = useState({ username: '', password: ''});

    function handleChange(e) {
        setLogin(Object.assign({}, login, { [e.target.name]: e.target.value }));
    }

    function handleClick(e) {
        e.preventDefault();

        loginAction();
    }

    if (loginState.loggedIn) {
        console.debug('Going home');
        startProfileLoad();
        return <Redirect to='/' />;
    }

    return (
        <form> 
            <p>
                <label htmlFor="username">Username</label><input type="text" name="username" value={login.username} onChange={handleChange} />
            </p>
            <p>
                <label htmlFor="password">Password</label><input type="password" name="password" value={login.password} onChange={handleChange} />
            </p>    
            <p>
                <button onClick={handleClick}>Login</button>
            </p>
        </form>
    );
}

export default connect(state => ({ 
    loginState: state.login
}), dispatch => ({ 
    startProfileLoad: bindActionCreators(startProfileLoad, dispatch),
    loginAction: bindActionCreators(login, dispatch)
}))(Home);
