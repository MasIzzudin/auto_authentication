import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Home from './Home';


export const Root = StackNavigator({
    LoginForm: {
        screen: LoginForm,
        navigationOptions: { header: null },
    },
    RegisterForm: {
        screen: RegisterForm,
        navigationOptions: {
            title: 'Register',
            headerStyle: {
                backgroundColor: '#F5FCFF',
                elevation: 0,
            },
        },
    },
    Home: {
        screen : Home,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#F5FCFF',
                elevation: 0,
            },
        },
    },
});

const AppNavigator = ({ dispatch, nav }) => {
    return (
        <Root navigation={addNavigationHelpers( { dispatch, state: nav })} />
    );
}

AppNavigator.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps) (AppNavigator);