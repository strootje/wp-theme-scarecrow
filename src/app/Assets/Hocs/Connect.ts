import { compose } from "recompose";
import { withApollo } from 'react-apollo';
import { withRouter } from "react-router";
import { connect as ConnectRedux } from "react-redux";
import { AppReducer, AppState, AppAction } from 'Actions/Reducers';
import { ThunkDispatch } from "redux-thunk";
import { ApolloClient } from "apollo-client";

type ActionFunc<DispatchActionsType> = ( dispatch: ThunkDispatch<AppState, ApolloClient<{}>, AppAction> ) => DispatchActionsType;

export default function<DispatchActionsType>( elem: any, actions?: ActionFunc<DispatchActionsType> ): any {
	return compose(
		withApollo,
		withRouter,
		actions ? ConnectRedux<AppState, DispatchActionsType>(AppReducer as any, actions) : ConnectRedux<AppState, {}>(AppReducer as any)
	)(elem);
}
