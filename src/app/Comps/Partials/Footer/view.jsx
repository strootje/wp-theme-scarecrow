import { Component, h } from 'preact';
import types from 'prop-types';

import Content from 'Comps/Controls/Content';
import Icon from 'Comps/Controls/Icon';
import Link from 'Comps/Controls/Link';
import List from 'Comps/Controls/List';
import Section from 'Comps/Controls/Section';

export default class extends Component {
	static propTypes = {
		menu: types.shape({
			name: types.string.isRequired,
			items: types.array.isRequired
		}).isRequireud,
		fetchPage: types.func.isRequired
	}

	componentWillMount() {
		const { fetchPage } = this.props;
		fetchPage();
	}

	render({ styles, locale, aboutPage, tags, fetchTags, menu }) {
		return (
			<footer>
				{aboutPage && <Section hero>
					<h4>{aboutPage.title}</h4>
					<Content page={aboutPage} more less />
				</Section>}

				<Section>
					<div class='columns eight'>
						<h4>{locale.tags.header}</h4>
						<List source={tags} filter={p => Object.values(p.nodesById)} fetch={fetchTags} render={({ renderItems }) => (
							<ul class={styles.tags}>{renderItems(({ item }) => (
								<li><code><Link to={item.link}>{item.name}</Link></code></li>
							))}</ul>
						)} />
					</div>

					<div class='columns four'>
						<h4>{menu.name}</h4>
						<List source={menu} filter={p => p.items} render={({ renderItems }) => (
							<ul class='fa-ul'>{renderItems(({ item }) => (
								<li><Link to={item.url} target={item.target}>
									<span class='fa-li'><Icon tag={item.classes.join(' ')} /></span>
									{item.title}
								</Link></li>
							))}</ul>
						)} />
					</div>
				</Section>

				<div class='container'>
					<div class='row'>
						<div class='columns twelve legal'>
							Bas Stroosnijder &copy; 2018 - Powered by <Link to='http://wordpress.org/' target='blank'>Wordpress</Link> & <Link to='/projects/scarecrow'>Scarecrow</Link>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
