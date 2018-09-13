import StackoverflowBadge from 'Badges/Stackoverflow';
import * as React from 'react';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<section>
				<StackoverflowBadge />
			</section>
		);
	}
}
