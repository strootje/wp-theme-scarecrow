import { h, render } from 'preact';
import 'preact/debug';
import Store, { StoreProvider } from './Providers/Store';
import Client, { ClientProvider } from './Providers/Client';

import 'Assets/Theme/Reset';
import App from 'Comps/App';
const client = new Client(theme.info.baseurl);
const store = (new Store(client)).create();


render((
	<StoreProvider store={store}>
		<ClientProvider client={client}>
			<App />
		</ClientProvider>
	</StoreProvider>
), document.body);
