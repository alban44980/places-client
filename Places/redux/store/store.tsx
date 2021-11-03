import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/reducers';

let store = createStore(reducers);

export default store;
