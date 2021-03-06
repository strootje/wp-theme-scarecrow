import {
	FetchMenuByLocationAction, FetchMenuByLocationReducer, FetchMenuByLocationState
} from './FetchMenuByLocation';

export type MenuState = FetchMenuByLocationState;
export type MenuAction = FetchMenuByLocationAction;

const reducers: ((state: MenuState, action: MenuAction) => MenuState)[] = [
	FetchMenuByLocationReducer
];

const dstate: MenuState = {
}

export function MenuReducer(state: MenuState = dstate, action: MenuAction): MenuState {
	return reducers.reduce((state, reducer) => reducer(state, action), state);
}
