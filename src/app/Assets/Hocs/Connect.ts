import { compose } from "recompose";
import { withApollo } from 'react-apollo';
import { connect as ConnectRedux } from "react-redux";
import { Dispatch } from 'redux';
import Reducers from 'Actions/Reducers';

type ActionFunc = ( dispatch: Dispatch ) => any;

export default function( elem: any, actions?: ActionFunc ): any {
	return compose(
		withApollo,
		ConnectRedux(Reducers, actions)
	)(elem);
}
