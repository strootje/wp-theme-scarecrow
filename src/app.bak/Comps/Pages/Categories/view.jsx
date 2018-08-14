import { Component, h } from 'preact';

import Section from 'Comps/Controls/Section';
import TermList from 'Comps/Partials/TermList';

export default class extends Component {
	render({ styles, categories, fetchCategories }) {
		const filter = p => Object.values(p.nodesById).map(p => {
			p.categories = { nodes: [ { name: p.title } ] };
			return p;
		});

		return (
			<Section>
				<TermList source={categories} filter={filter} fetch={fetchCategories} />
			</Section>
		);
	}
}
