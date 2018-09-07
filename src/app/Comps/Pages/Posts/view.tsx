import * as React from 'react';
const style = require('./style');

import PostsList from 'Controls/PostsList';

interface OwnProps {
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
};

export default class extends React.Component<OwnProps, {}> {
	render(): JSX.Element {
		return (
			<PostsList />
		);
	}
}
