import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Loader> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class Loader extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return <span>loading ...</span>
	}
}
