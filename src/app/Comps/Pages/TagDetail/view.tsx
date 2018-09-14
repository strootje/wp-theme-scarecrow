import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<TagDetail> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class TagDetail extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (
			<p>tag detail view</p>
		);
	}
}
