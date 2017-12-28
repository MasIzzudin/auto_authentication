import { combineReducers } from 'redux';

import { default as AuthReducer } from './AuthReducer';
import { default as navReducer } from './navReducer';

const AppReducer = combineReducers({
    auth: AuthReducer,
    nav: navReducer
});

export default AppReducer;