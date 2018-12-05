import { combineReducers } from 'redux';
import user from './user';

const reduces = combineReducers(
    {
        user,
    }
);

export default reduces;