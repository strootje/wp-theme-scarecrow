import { Component, h } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import Content from 'Comps/Controls/Content';
import Section from 'Comps/Controls/Section';

class PageView extends Component {
	componentWillMount() {
		const { fetchPage } = this.props;
		fetchPage();
	}

	render({ page = {} }) {
		return (
			<Section>
				<h2>{page.title}</h2>
				<Content page={page} />
			</Section>
		);
	}
}

export default PageView;
