import Names from 'classnames';
import * as React from 'react';

import * as Styles from './style.scss';

type OwnProps = React.HTMLAttributes<Row> & {
}

export interface DispatchProps {
}

type Props = OwnProps & DispatchProps & {
};

export default class Row extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		const {
			className,
			children
		} = this.props;

		return (
			<div className={Names(className, Styles.row)}>
				{children}
			</div>
		);
	}
}
