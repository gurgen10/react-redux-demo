import {createStore, applyMiddleware} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import ReduxThunk from 'redux-thunk';

const store = createStore(cakeReducer, applyMiddleware(ReduxThunk) );

export default store;
