import * as Redux from 'redux';
import { ApolloClient } from 'apollo-client';
import gql from "graphql-tag";

import Tag from 'Models/Tag';
import TagMapper from 'Mappers/Wordpress/TagMapper';
import { FetchAllTags } from 'Entities/Wordpress/FetchAllTags';

const TAGS_FETCH_REQUEST = 'TAGS_FETCH_REQUEST';
const TAGS_FETCH_SUCCESS = 'TAGS_FETCH_SUCCESS';
const TAGS_FETCH_FAILURE = 'TAGS_FETCH_FAILURE';

export interface FetchAllTagsState {
	loading: boolean,
	tags: Tag[]
}

type Request = {};
type Success = { tags: Tag[] };
type Failure = { error: Error };
type RequestAction = ({ type: 'TAGS_FETCH_REQUEST' } & Request);
type SuccessAction = ({ type: 'TAGS_FETCH_SUCCESS' } & Request & Success);
type FailureAction = ({ type: 'TAGS_FETCH_FAILURE' } & Request & Failure);
export type FetchAllTagsAction = (RequestAction) | (SuccessAction) | (FailureAction);

const FetchAllTagsRequest = () => ({ type: TAGS_FETCH_REQUEST });
const FetchAllTagsSuccess = ( tags: Tag[] ) => ({ type: TAGS_FETCH_SUCCESS, tags });
const FetchAllTagsFailure = ( error: Error ) => ({ type: TAGS_FETCH_FAILURE, error });

export function FetchAllTags() {
	return ( dispatch: Redux.Dispatch, getState: any, client: ApolloClient<{}> ) => {
		dispatch(FetchAllTagsRequest());

		client.query<FetchAllTags>({
			query: gql`query FetchAllTags {
				tags {
					nodes {
						id
						name
					}
				}
			}`
		}).then(
			( data ) => dispatch(FetchAllTagsSuccess(TagMapper.MapAll((data.data as any).tags.nodes)))
		).catch(
			( error: Error ) => dispatch(FetchAllTagsFailure(error))
		)
	}
}


export function FetchAllTagsReducer( state: FetchAllTagsState, action: FetchAllTagsAction ): FetchAllTagsState {
	switch (action.type) {
		case TAGS_FETCH_REQUEST:
			return {
				...state,
				loading: true
			};

		case TAGS_FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				tags: [ ...state.tags, ...action.tags ]
			};

		case TAGS_FETCH_FAILURE:
			return {
				...state,
				loading: false
			};

		default:
			return state;
	}
}
