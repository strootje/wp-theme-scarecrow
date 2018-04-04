import { Component, h } from 'preact';
import names from 'classnames';

import Logo from 'Comps/Controls/Logo';
import NavItem from 'Comps/Controls/NavItem';
import Searchbar from 'Comps/Controls/Searchbar';

export default class extends Component {
	render({ styles }) {
		return (
			<header class={names('container', styles.header)}>
				<ul class={names('row', styles.navigation)}>
					<li class='columns two item'><NavItem to='/posts'>posts</NavItem></li>
					<li class='columns two item'><NavItem to='/projects'>projects</NavItem></li>
					<li class='columns four'><NavItem to='/'><Logo /></NavItem></li>
					<li class='columns four search'><Searchbar /></li>
				</ul>
			</header>
		);
	}
}
