import * as React from 'react';
import { IntlProvider } from 'react-intl';

interface OwnProps {
	locale: string,
	children: any
}

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		return (
			<IntlProvider locale={this.props.locale} messages={require('./../../../Assets/Locales/en')}>
				{this.props.children}
			</IntlProvider>
		)
	}
}
