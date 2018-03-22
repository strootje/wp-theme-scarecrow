import { h, Component } from 'preact';
import names from 'classnames';

import Logo from 'Comps/Controls/Logo';
import NavItem from 'Comps/Controls/NavItem';
import Searchbar from 'Comps/Controls/Searchbar';

class AppHeaderView extends Component {
	render({ styles }) {
		return (
			<header>
				<nav class={names(styles.mainnav)}>
					<ul class='container'>
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
					</ul>
				</nav>
			</header>
		);
	}
}

export default AppHeaderView;
