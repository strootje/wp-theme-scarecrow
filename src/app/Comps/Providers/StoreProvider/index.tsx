import * as React from 'react';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from 'Actions/Reducers';

interface OwnProps {
	children: any
}

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		return (
			<Provider store={createStore(reducers)}>
				{this.props.children}
			</Provider>
		);
	}
}
