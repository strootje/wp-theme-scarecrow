import BaseComponent from 'Partials/BaseComponent';
import * as React from 'react';

import * as Styles from './style.scss';
import Section from 'Partials/Section';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<DetailSection> & {
	title: string
	children: JSX.Element | JSX.Element[]
};

type Props = OwnProps & DispatchProps & {
};

type State = {
};

export default class DetailSection extends BaseComponent<OwnProps, Props, State> {
	render(): JSX.Element {
		const { title, children } = this.props;

		return (
			<Section className={Styles.DetailSection}>
				<Section.Row>
					<Section.Column>
						<article>
							<header><h2>{title}</h2></header>
							{children}
						</article>
					</Section.Column>
				</Section.Row>
			</Section>
		);
	}
}
