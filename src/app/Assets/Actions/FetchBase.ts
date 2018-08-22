import { Dispatch } from "redux";
import { ApolloClient } from "apollo-client";

export type FetchBaseState<State> = { loading: boolean } & State;

export type FetchBaseAction<Request, Success, RequestType, SuccessType, FailureType>
	= { type: RequestType } & Request
	| { type: SuccessType } & Request & Success
	| { type: FailureType } & Request & { error: Error };

export function FetchBaseBuilder() {
	return () => ( dispatch: Dispatch, getState: any, client: ApolloClient<{}> ) => {
	}
}
