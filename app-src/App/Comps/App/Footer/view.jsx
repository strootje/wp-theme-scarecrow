import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import Icon from 'Comps/Controls/Icon';
import Link from 'Comps/Controls/Link';
import List from 'Comps/Controls/List';
import Section from 'Comps/Controls/Section';

class AppFooterView extends Component {
	static propTypes = {
		aboutPge: types.shape({ content: types.string.isRequired }).isRequired,
		tags: types.object,
		menu: types.object,

		fetchPage: types.func.isRequired,
		fetchTags: types.func.isRequired
	}

	static defaultProps = {
		tags: { tagsById: [] },
		menu: { items: [] }
	}

	componentDidMount = () => {
		const { fetchPage, fetchTags } = this.props;
		fetchPage();
		fetchTags();
	}

	render({ styles, aboutPage, tags, menu }) {
		return (
			<div>
				{aboutPage && (<Section id="about-page" hero>
					<div dangerouslySetInnerHTML={{
						__html: aboutPage.content
					}} />
				</Section>)}

				<footer class={names('container', styles.footerWrapper)}>
					<div class='row'>
						<div class='columns eight'>
							__TAGS__
							<List source={tags} filter={p => Object.values(p.tagsById)} render={({ renderItems }) => (
								<ul>{renderItems(({ item }) => (<li>{item.name}</li>))}</ul>
							)} />
						</div>

						<div class='columns four'>
							<h4>{menu.name}</h4>
							<List source={menu} filter={p => p.items} render={({ renderItems }) => (
								<ul class='fa-ul'>{renderItems(({ key, item }) => (
									<li><Link to={item.url}>
										<span class='fa-li'><Icon tag={item.classes.join(' ')} /></span>
										{item.title}
									</Link></li>
								))}</ul>
							)} />

						</div>
					</div>

					<div class={styles.legal}>Bas Stroosnijder &copy; 2018</div>
				</footer>
			</div>
		);
	}
}

export default AppFooterView;
