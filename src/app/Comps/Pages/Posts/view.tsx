import PostsList from 'Controls/PostsList';
import BaseComponent from 'Partials/BaseComponent';
import PageWithSidebar from 'Partials/PageWithSidebar';
import * as React from 'react';

export interface DispatchProps {
}

type OwnProps = React.HTMLAttributes<Posts> & {
}

type Props = OwnProps & DispatchProps & {
};

export default class Posts extends BaseComponent<OwnProps, Props> {
	render(): JSX.Element {
		return (
			<PageWithSidebar>
				<PostsList />
			</PageWithSidebar>
		);
	}
}
