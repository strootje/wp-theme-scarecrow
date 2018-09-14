import * as React from 'react';

import StackoverflowBadge from 'Badges/Stackoverflow';
import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Sidebar> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class Sidebar extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (
			<section>
				<StackoverflowBadge />
			</section>
		);
	}
}
