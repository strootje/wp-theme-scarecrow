import * as React from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
	to: string
	title?: string
	target?: string
	className?: string
}

type Props = OwnProps

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const {
			to,
			children: label,
			...rest
		} = this.props;

		const localhost = 'localhost:9000';
		const url = to.replace('http://localhost:8080', '');

		return (url.search(localhost) > -1)
			? <Link to={url} {...rest}>{label}</Link>
			: <a href={url} {...rest}>{label}</a>
	}
}
