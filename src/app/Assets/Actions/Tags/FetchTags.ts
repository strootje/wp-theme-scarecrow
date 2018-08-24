import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';

const FetchTagsQuery = require('Queries/Wordpress/FetchTagsQuery');
import { WP_FetchTags } from 'Entities/Wordpress/WP_FetchTags';
import TagMapper from 'Mappers/Wordpress/TagMapper';
import Tag from 'Models/Tag';

enum Actions {
	Request = 'FETCH_TAGS__REQUEST',
	Result = 'FETCH_TAGS__RESULT',
	Error = 'FETCH_TAGS__ERROR'
};

export interface FetchTagsState {
	loading: boolean,
	tags: Tag[]
};

export type FetchTagsAction =
	| { type: Actions.Request }
	| { type: Actions.Result, tags: Tag[] }
	| { type: Actions.Error, error: Error };

const Request = () => ({ type: Actions.Request });
const Result = ( tags: Tag[] ) => ({ type: Actions.Result, tags });
const ErrorHandler = ( error: Error ) => ({ type: Actions.Error, error });

export function FetchTags() {
	return ( dispatch: Redux.Dispatch, getState: () => any, client: ApolloClient<{}> ) => {
		dispatch(Request());

		client.query<WP_FetchTags>({ query: FetchTagsQuery }).then(
			({ data: { tags }}) => dispatch(Result(TagMapper.MapAll(tags))),
			( error ) => dispatch(ErrorHandler(error))
		);
	}
};

export function FetchTagsReducer( state: FetchTagsState, action: FetchTagsAction ): FetchTagsState {
	switch (action.type) {
		case Actions.Request: return { ...state, loading: true };
		case Actions.Result: return { ...state, loading: false, tags: [ ...state.tags, ...action.tags ] };
		case Actions.Error: return { ...state, loading: false };
		default: return state;
	}
};
