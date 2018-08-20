import { FetchMenuReducer, FetchMenuState, FetchMenuAction } from './Fetch';

export type MenuState = FetchMenuState;
export type MenuAction = FetchMenuAction;

const reducers: (( state: MenuState, action: MenuAction ) => MenuState)[] = [
	FetchMenuReducer
];

const dstate: MenuState = {
	loading: false
}

export function MenuReducer( state: MenuState = dstate, action: MenuAction ): MenuState {
	return reducers.reduce(( state, reducer ) => reducer(state, action), state);
}
