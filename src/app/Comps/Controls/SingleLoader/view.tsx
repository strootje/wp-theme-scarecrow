import * as React from 'react';

import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<SingleLoader> & {
};

type Props = OwnProps & DispatchProps & {
};

export default class SingleLoader extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (<span>loading...</span>);
	}
}
