import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './pages/Home';
import Login from './pages/Login';

import { loadProfile } from './profile';

function App({ history, location, loadProfile, profileState, unauthorised }) {
    console.debug('rerender');

    useEffect(() => {
        console.debug('Checking Profile Loaded...', profileState);
        if (!profileState.loaded && !profileState.loading) {
            console.debug('Going to load the profile');
            loadProfile();
        }
    }, [profileState.startLoad]);

    // if (profile.loading) {
    //     logger.debug('Waiting for profile to load...');
    //     return <Spinner />;
    // }

    if (unauthorised && location.pathname !== '/login') {
        console.debug('Unauthorised while reloading, plus not on login page');
        history.push('/login');
    }

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    );
}

const mapStateToProps = state => ({
    unauthorised: state.unauthorised,
    profileState: state.profile
});
const mapDispatchToProps = dispatch => ({
    loadProfile: bindActionCreators(loadProfile, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));