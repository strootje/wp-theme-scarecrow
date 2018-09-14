import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

import { IntlProvider } from 'react-intl';

type OwnProps = React.HTMLAttributes<LocaleProvider> & {
	locale: string
};

export default class LocaleProvider extends BaseComponent<OwnProps> {
	render(): JSX.Element {
		return (
			<IntlProvider locale={this.props.locale} messages={require('./../../../Assets/Locales/en')}>
				{this.props.children}
			</IntlProvider>
		)
	}
}
