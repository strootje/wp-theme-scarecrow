import * as React from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import Reducers from 'Actions/Reducers';
import { logger } from 'redux-logger';

interface OwnProps {
	children: any
}

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const store = createStore(Reducers, applyMiddleware(logger));

		return (
			<Provider store={store}>
				{this.props.children}
			</Provider>
		);
	}
}
