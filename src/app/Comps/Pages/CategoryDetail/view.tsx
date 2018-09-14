import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<CategoryDetail> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class CategoryDetail extends BaseComponent<|OwnProps, Props> {
	render(): JSX.Element {
		return (
			<p>category detail view</p>
		);
	}
}
