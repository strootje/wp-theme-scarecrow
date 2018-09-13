import PostsList from 'Controls/PostsList';
import * as React from 'react';

const style = require('./style');

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
