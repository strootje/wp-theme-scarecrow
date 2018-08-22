import * as React from 'react';
import { Provider } from 'react-redux';
import { withApollo } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

import { createStore, applyMiddleware } from 'redux';
import { AppReducer } from 'Actions/Reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

interface OwnProps {
	children: any
}

interface StateProps {
	client: ApolloClient<{}>
}

type Props = OwnProps & StateProps;

class StoreProvider extends React.Component<Props, {}> {
	render(): JSX.Element {
		const {
			client
		} = this.props as Props;

		const store = createStore(AppReducer, applyMiddleware(logger, thunk.withExtraArgument(client)));

		return (
			<Provider store={store}>
				{this.props.children}
			</Provider>
		);
	}
}

export default withApollo(StoreProvider) as any;
