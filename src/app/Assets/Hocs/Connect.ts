import { compose } from "recompose";
import { withApollo } from 'react-apollo';
import { connect as ConnectRedux } from "react-redux";
import { AppReducer, AppState, AppAction } from 'Actions/Reducers';
import { ThunkDispatch } from "redux-thunk";
import { ApolloClient } from "apollo-client";

type ActionFunc = ( dispatch: ThunkDispatch<AppState, ApolloClient<{}>, AppAction> ) => any;

export default function( elem: any, actions?: ActionFunc ): any {
	return compose(
		withApollo,
		ConnectRedux(AppReducer, actions)
	)(elem);
}
