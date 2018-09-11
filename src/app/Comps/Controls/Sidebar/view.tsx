import * as React from 'react';

import StackoverflowBadge from 'Badges/Stackoverflow';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<section>
				<StackoverflowBadge />
			</section>
		);
	}
}
