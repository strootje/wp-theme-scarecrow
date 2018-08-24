import { FetchPageByPageIdReducer, FetchPageByPageIdState, FetchPageByPageIdAction } from 'Actions/Pages/FetchPageByPageId';
import { FetchPageByUriReducer, FetchPageByUriState, FetchPageByUriAction } from './FetchPageByUri';

export type PagesState =
	& FetchPageByPageIdState
	& FetchPageByUriState;

export type PagesAction =
	| FetchPageByPageIdAction
	| FetchPageByUriAction;

const reducers: any[] = [
	FetchPageByPageIdReducer,
	FetchPageByUriReducer
];

const dstate: PagesState = {
	loading: false,
	pages: []
}

export function PagesReducer( state: PagesState = dstate, action: PagesAction ): PagesState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
