import { h, Component } from 'preact';
import types from 'prop-types';
import names from 'classnames';

import List from 'Comps/Controls/List';
import Logo from 'Comps/Controls/Logo';
import NavItem from 'Comps/Controls/NavItem';
import Searchbar from 'Comps/Controls/Searchbar';

class AppHeaderView extends Component {
	static propTypes = {
		menu: types.shape({
			items: types.arrayOf(types.shape({
				name: types.string.isRequired,
				url: types.string.isRequired
			})).isRequired
		})
	}

	static defaultProps = {
		menu: { items: [
			{ name: 'posts', url: '/posts' },
			{ name: 'projects', url: '/projects' }
		]}
	}

	render({ styles, baseUrl, menu }) {
		return (
			<header>
				<nav class={names(styles.mainnav)}>
					<List source={menu} filter={p => p.items} render={({ renderItems }) => (
						<ul class='container'>
							{renderItems(({ item }) => (
								<li class={names('columns', 'two', styles.item)}>
									<NavItem to={item.url} label={item.title} activeClass={styles.active} />
								</li>
							))}

							<li class={names('columns', 'four', styles.logo)}>
								<NavItem to={baseUrl}><Logo /></NavItem>
							</li>

							<li class={names('columns', 'four', styles.search)}>
								<Searchbar />
							</li>
						</ul>
					)} />

					{/* <ul class='container'>
						<li class={names('columns', 'two', styles.item)}>
							<NavItem to='/posts' label='posts' activeClass={styles.active} />
						</li>
						<li class={names('columns', 'two', styles.item)}>
							<NavItem to='/projects' label='projects' activeClass={styles.active} />
						</li>

						<li class={names('columns', 'four', styles.logo)}>
							<NavItem to='/'><Logo /></NavItem>
						</li>
						
						<li class={names('columns', 'four', styles.search)}>
							<Searchbar />
						</li>
					</ul> */}
				</nav>
			</header>
		);
	}
}

export default AppHeaderView;
