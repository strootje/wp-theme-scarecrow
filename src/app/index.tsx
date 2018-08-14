import * as React from 'react';
import * as ReactDom from 'react-dom';
import StoreProvider from 'Providers/StoreProvider';

import App from 'App';

const Bootstrap = () => (
	<StoreProvider>
		<App />
	</StoreProvider>
);

ReactDom.render((<Bootstrap />), document.getElementById('layout'));
