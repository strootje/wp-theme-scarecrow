import { Component, h } from 'preact';

import Content from 'Comps/Controls/Content';
import Section from 'Comps/Controls/Section';

export default class extends Component {
	componentWillMount() {
		const { fetchPage } = this.props;
		fetchPage();
	}

	render({ styles, page }) {
		return (
			page && (<Section>
				<h1>{page.title}</h1>
				<Content page={page} />
			</Section>)
		);
	}
}
