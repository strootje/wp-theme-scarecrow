import 'Theme';

import App from 'App';
import ApiProvider from 'Providers/ApiProvider';
import LocaleProvider from 'Providers/LocaleProvider';
import RouterProvider from 'Providers/RouterProvider';
import StoreProvider from 'Providers/StoreProvider';
import * as React from 'react';
import * as ReactDom from 'react-dom';

const endpoint = 'localhost:8080';
const Bootstrap = () => (
	<ApiProvider endpoint={endpoint}>
		<StoreProvider>
			<RouterProvider>
				<LocaleProvider locale='en'>
					<App />
				</LocaleProvider>
			</RouterProvider>
		</StoreProvider>
	</ApiProvider>
);

ReactDom.render((<Bootstrap />), document.getElementById('app'));
