import { AppReducer } from 'Actions/Reducers';
import { ApolloClient } from 'apollo-client';
import * as React from 'react';
import { withApollo } from 'react-apollo';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
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
