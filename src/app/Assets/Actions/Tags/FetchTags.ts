import { AppState } from 'Actions/Reducers';
import TagMapper from 'Mappers/Wordpress/TagMapper';
import Tag from 'Models/Tag';
import { WP_FetchTags } from 'Queries/Wordpress/__generated__/WP_FetchTags';
import { ApolloClient } from 'apollo-client';
import * as Redux from 'redux';

const FetchTagsQuery = require('Queries/Wordpress/FetchTagsQuery');
enum Actions {
	Request = 'FETCH_TAGS__REQUEST',
	Result = 'FETCH_TAGS__RESULT',
	Error = 'FETCH_TAGS__ERROR'
};

export type FetchTagsState = Tag[];

export type FetchTagsAction =
	| { type: Actions.Request }
	| { type: Actions.Result, tags: Tag[] }
	| { type: Actions.Error, error: Error };

const Request = () => ({ type: Actions.Request });
const Result = (tags: Tag[]) => ({ type: Actions.Result, tags });
const ErrorHandler = (error: Error) => ({ type: Actions.Error, error });

export function FetchTags() {
	return async (dispatch: Redux.Dispatch, getState: () => AppState, client: ApolloClient<{}>) => {
		await dispatch(Request());

		try {
			const { data: { tags }} = await client.query<WP_FetchTags>({
				query: FetchTagsQuery
			});

			return await dispatch(Result(TagMapper.MapAll(tags)));
		} catch (error) {
			return await dispatch(ErrorHandler(error));
		}
	}
};

export function FetchTagsReducer(state: FetchTagsState, action: FetchTagsAction): FetchTagsState {
	switch (action.type) {
		case Actions.Request: return [ ...state ];
		case Actions.Result: return [ ...state, ...action.tags ];
		case Actions.Error: return [ ...state ];
		default: return state;
	}
};
