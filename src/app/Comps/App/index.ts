import { FetchSettings } from 'Actions/Settings/FetchSettings';
import Connect from 'Hocs/Connect';

import view from './view';

export default Connect(view, dispatch => ({
	GetSettings: () => dispatch(FetchSettings())
}));
