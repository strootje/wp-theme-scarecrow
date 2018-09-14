import Names from 'classnames';
import * as React from 'react';

import { SettingsState } from 'Actions/Settings';
import BaseComponent from 'Partials/BaseComponent';

import { Link as RouterLink } from 'react-router-dom';

import * as Styles from './style.scss';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Link> & {
	to: string
	title?: string
	target?: string
};

type Props = OwnProps & DispatchProps & {
	Settings: SettingsState
};

export default class Link extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		const {
			to, title, target, className,
			children: label,
		} = this.props;

		const localhost = 'localhost:9000';
		const url = to.replace(`http://${localhost}`, '').replace('http://localhost:8080', '');

		return (url.search(localhost) > -1)
			? <RouterLink className={Names(Styles.Link, className)} to={url} {...{ title, target }}>{label}</RouterLink>
			: <a className={Names(Styles.Link, className)} href={url} {...{ title, target }}>{label}</a>
	}
}
