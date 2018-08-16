import { compose } from "recompose";
import { withApollo } from 'react-apollo';
import { connect as ConnectRedux } from "react-redux";
import Reducers from 'Actions/Reducers';

type ActionFunc = ( dispatch: ( action: { type: string } ) => any ) => any;

export default function( elem: any, actions?: ActionFunc ): any {
	return compose(
		withApollo,
		ConnectRedux(Reducers, actions)
	)(elem);
}
