import { FetchMenuByLocationReducer, FetchMenuByLocationState, FetchMenuByLocationAction } from './FetchByLocation';

export type MenuState = FetchMenuByLocationState;
export type MenuAction = FetchMenuByLocationAction;

const reducers: (( state: MenuState, action: MenuAction ) => MenuState)[] = [
	FetchMenuByLocationReducer
];

const dstate: MenuState = {
	loading: false
}

export function MenuReducer( state: MenuState = dstate, action: MenuAction ): MenuState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
