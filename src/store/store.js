import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const configureStore = preloadState => (
	createStore(
		rootReducer,
		preloadState,
		composeWithDevTools(applyMiddleware(thunk)),
	)
);

const store = configureStore({});

export default store;