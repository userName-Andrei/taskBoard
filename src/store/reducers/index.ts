import {combineReducers} from 'redux';
import { boardReducer } from './boardReducer';
import { commentReducer } from './commentReducer';
import { projectReducer } from './projectReducer';
import { taskReducer } from './taskReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    projects: projectReducer,
    tasks: taskReducer,
    comments: commentReducer,
    boards: boardReducer,
    auth: userReducer
})