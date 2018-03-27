import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import persistState from 'redux-localstorage';
import { Provider } from 'preact-redux';
import * as Reducers from 'Assets/Reducers';

class Store {
	constructor( client ) {
		this.client = client;
	}

	create = () => {
		return createStore(combineReducers({
			...Reducers
		}), compose(
			applyMiddleware(logger, thunk.withExtraArgument(this.client))
			// ,persistState(null, { key: 'strootje', slicer: paths => state => ({ dbdata: state.dbdata }) })
		));
	}
}

export default Store;
export const StoreProvider = Provider;
