import * as React from 'react';

import PostsList from 'Controls/PostsList';
import BaseComponent from 'Partials/BaseComponent';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Posts> & {
}

type Props = OwnProps & DispatchProps & {
};

export default class Posts extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (
			<PostsList />
		);
	}
}
