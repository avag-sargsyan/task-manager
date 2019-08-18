import { combineReducers } from 'redux';
import userReducer from './userReducer';
import reportReducer from './reportReducer';

export default combineReducers({
    user: userReducer,
    report: reportReducer
});
