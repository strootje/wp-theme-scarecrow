import Connect from 'Hocs/Connect';
import view from './view';

import { FetchSettings } from 'Actions/ViewData/Settings/FetchSettings';

export default Connect(view, dispatch => ({
	GetSettings: () => dispatch(FetchSettings())
}));
