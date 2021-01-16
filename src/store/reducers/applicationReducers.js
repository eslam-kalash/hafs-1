// External dependencies
import { combineReducers } from 'redux';
import freeSession from './freeSession';
import articles from './articles'; 

export default combineReducers({
    freeSession,
    articles
});
