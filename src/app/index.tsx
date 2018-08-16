import * as React from 'react';
import * as ReactDom from 'react-dom';

import ApiProvider from 'Providers/ApiProvider';
import StoreProvider from 'Providers/StoreProvider';
import LocaleProvider from 'Providers/LocaleProvider';

import 'Theme';
import App from 'App';

const Bootstrap = () => (
	<ApiProvider>
		<StoreProvider>
			<LocaleProvider locale='en'>
				<App />
			</LocaleProvider>
		</StoreProvider>
	</ApiProvider>
);

ReactDom.render((<Bootstrap />), document.getElementById('layout'));
