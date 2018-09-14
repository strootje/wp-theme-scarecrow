import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

import { BrowserRouter } from 'react-router-dom';

export default class RouterProvider extends BaseComponent<React.HTMLAttributes<RouterProvider>> {
	render(): JSX.Element {
		return (
			<BrowserRouter>
				{this.props.children}
			</BrowserRouter>
		);
	}
}
