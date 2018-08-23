import * as React from 'react';
import { match } from 'react-router';
import { PagesState } from 'Actions/Pages';

interface OwnProps {
	match: match<{ pageSlug: string }>
}

type Props = OwnProps & {
	Pages: PagesState

	GetPage: ( uri: string ) => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			match: { url },
			Pages: { pages },

			GetPage
		} = this.props as Props;

		GetPage(url);
	}

	render(): JSX.Element {
		const {
			Pages: { pages },
		} = this.props as Props;

		return (
			<p>this is a page</p>
		);
	}
}
