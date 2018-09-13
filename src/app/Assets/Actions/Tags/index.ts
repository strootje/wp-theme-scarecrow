import { FetchTagsAction, FetchTagsReducer, FetchTagsState } from './FetchTags';

export type TagsState = FetchTagsState;
export type TagsAction = FetchTagsAction;

const reducers: ((state: TagsState, action: TagsAction) => TagsState)[] = [
	FetchTagsReducer
];

const dstate: TagsState = {
	loading: false,
	tags: []
}

export function TagsReducer(state: TagsState = dstate, action: TagsAction): TagsState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
