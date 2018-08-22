import { FetchPageByUriReducer, FetchPageByUriState, FetchPageByUriAction } from './FetchBySlug';

export type PagesState = FetchPageByUriState;
export type PagesAction = FetchPageByUriAction;

const reducers: (( state: PagesState, action: PagesAction ) => PagesState)[] = [
	FetchPageByUriReducer
];

const dstate: PagesState = {
	loading: false,
	pages: []
}

export function PagesReducer( state: PagesState = dstate, action: PagesAction ): PagesState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
