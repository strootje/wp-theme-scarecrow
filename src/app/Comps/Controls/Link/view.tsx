import { SettingsState } from 'Actions/Settings';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
	to: string
	title?: string
	target?: string
	className?: string
	children: string
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
	Settings: SettingsState
};

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const {
			to, title, target, className,
			children: label,
		} = this.props as Props;

		const localhost = 'localhost:9000';
		const url = to.replace(`http://${localhost}`, '').replace('http://localhost:8080', '');

		return (url.search(localhost) > -1)
			? <Link to={url} {...{ title, target, className }}>{label}</Link>
			: <a href={url} {...{ title, target, className }}>{label}</a>
	}
}
