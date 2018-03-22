import { h, render } from 'preact';
import 'preact/debug';
import Store, { StoreProvider } from './Providers/Store';
import Client, { ClientProvider } from './Providers/Client';

import App from 'Comps/App';
import { FetchTheme } from 'Assets/Actions/Theme';

const client = new Client('http://localhost');
const store = (new Store(client)).create();

import styles from 'Assets/Theme/Reset';

store.dispatch(FetchTheme()).then(() => {
	render((
		<StoreProvider store={store}>
			<ClientProvider  client={client}>
				<App />
			</ClientProvider>
		</StoreProvider>
	), document.body);
});
