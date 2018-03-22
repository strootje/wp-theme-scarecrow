export const THEME_FETCH_START = 'THEME_FETCH_START';
const _fetchThemeStart = () => ({
	type: THEME_FETCH_START
});

export const THEME_FETCH_SUCCESS = 'THEME_FETCH_SUCCESS';
const _fetchThemeSuccess = ( mods ) => ({
	type: THEME_FETCH_SUCCESS,
	...mods
});

export const THEME_FETCH_FAILURE = 'THEME_FETCH_FAILURE';
const _fetchThemeFailure = ( reason ) => ({
	type: THEME_FETCH_FAILURE,
	reason: reason
});

export const FetchTheme = () => ( dispatch, getState, client ) => {
	dispatch(_fetchThemeStart());
	return fetch('/wp-json/scarecrow/v1/theme').then(resp => resp.json()).then(
		json => dispatch(_fetchThemeSuccess(json)),
		erro => dispatch(_fetchThemeFailure(erro))
	);
};
