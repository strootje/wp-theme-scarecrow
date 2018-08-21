import { FetchAllTagsReducer, FetchAllTagsState, FetchAllTagsAction } from './FetchAll';

export type TagsState = FetchAllTagsState;
export type TagsAction = FetchAllTagsAction;

const reducers: (( state: TagsState, action: TagsAction ) => TagsState)[] = [
	FetchAllTagsReducer
];

const dstate: TagsState = {
	loading: false,
	tags: []
}

export function TagsReducer( state: TagsState = dstate, action: TagsAction ): TagsState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
