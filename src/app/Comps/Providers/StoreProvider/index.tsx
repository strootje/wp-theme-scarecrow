import * as React from 'react';
import { applyMiddleware, createStore } from 'redux';

import { AppReducer } from 'Actions/Reducers';
import BaseComponent from 'Partials/BaseComponent';

import { ApolloClient } from 'apollo-client';
import { withApollo } from 'react-apollo';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

type OwnProps = React.HTMLAttributes<StoreProvider> & {
};

type Props = OwnProps & {
	client: ApolloClient<{}>
};

class StoreProvider extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		const {
			client
		} = this.props;

		const store = createStore(AppReducer, applyMiddleware(logger, thunk.withExtraArgument(client)));

		return (
			<Provider store={store}>
				{this.props.children}
			</Provider>
		);
	}
}

export default withApollo(StoreProvider) as any;
