import {
	FetchPageByPageIdAction, FetchPageByPageIdReducer, FetchPageByPageIdState
} from 'Actions/Pages/FetchPageByPageId';

import { FetchPageByUriAction, FetchPageByUriReducer, FetchPageByUriState } from './FetchPageByUri';

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

const dstate: PagesState = [];

export function PagesReducer(state: PagesState = dstate, action: PagesAction): PagesState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
