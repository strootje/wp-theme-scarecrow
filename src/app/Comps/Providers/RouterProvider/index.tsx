import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<BrowserRouter>
				{this.props.children}
			</BrowserRouter>
		);
	}
}
