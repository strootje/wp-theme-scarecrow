import Names from 'classnames';
import * as React from 'react';

import * as Styles from './style.scss';

type OwnProps = React.HTMLAttributes<Row> & {
	columns?: 'one' | 'two' | 'three' | 'four'
	| 'five' | 'six' | 'seven' | 'eight'
	| 'nine' | 'ten' | 'eleven' | 'twelve'
}

export interface DispatchProps {
}

type Props = OwnProps & DispatchProps & {
};

export default class Row extends React.Component<OwnProps, {}> {
	static defaultProps: OwnProps = {
		columns: 'twelve'
	};

	render(): JSX.Element {
		const {
			className,
			children,
			columns
		} = this.props;

		return (
			<div className={Names(className, Styles.columns, columns)}>
				{children}
			</div>
		);
	}
}
