import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loadProfile } from '../profile';
import { bindActionCreators } from 'redux';

function Home ({ history, loadProfile, profile }) {
    const [ login, setLogin ] = useState({ username: '', password: ''});

    function handleChange(e) {
        setLogin(Object.assign({}, login, { [e.target.name]: e.target.value }));
    }

    function handleClick(e) {
        e.preventDefault();

        loadProfile();
    }

    if (profile.loaded) {
        history.push('/');
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

export default connect(state => ({ profile: state.profile }), dispatch => ({ loadProfile: bindActionCreators(loadProfile, dispatch) }))(Home);
