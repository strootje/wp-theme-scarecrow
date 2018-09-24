import Names from 'classnames';
import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

import Column from 'Partials/Section/Column';
import Row from 'Partials/Section/Row/view';

import * as Styles from './style.scss';

type OwnProps = React.HTMLAttributes<Section> & {
	children?: JSX.Element | JSX.Element[]
	hero?: boolean
}

export interface DispatchProps {
}

type Props = & OwnProps & DispatchProps & {
};

export default class Section extends BaseComponent<OwnProps, Props> {
	static Row = Row;
	static Column = Column
	static defaultProps: OwnProps = {
		hero: false
	};

	render(): JSX.Element {
		const {
			className,
			children,
			hero
		} = this.props;

		const _render = () => (
			<section className={Names(className, Styles.container)}>
				{children}
			</section>
		);

		if (hero) {
			return (<div className={Styles.sectionHero}>{_render()}</div>);
		} else {
			return _render();
		}
	}
}
