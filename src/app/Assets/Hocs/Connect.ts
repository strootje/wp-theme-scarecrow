import { AppAction, AppReducer, AppState } from 'Actions/Reducers';
import { ApolloClient } from 'apollo-client';
import { withApollo } from 'react-apollo';
import { connect as ConnectRedux } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { ThunkDispatch } from 'redux-thunk';

type ActionFunc<DispatchActionsType> = (dispatch: ThunkDispatch<AppState, ApolloClient<{}>, AppAction>) => DispatchActionsType;

export default function <DispatchActionsType>(elem: any, actions?: ActionFunc<DispatchActionsType>): any {
	return compose(
		withApollo,
		withRouter,
		actions ? ConnectRedux<AppState, DispatchActionsType>(AppReducer as any, actions) : ConnectRedux<AppState, {}>(AppReducer as any)
	)(elem);
}
