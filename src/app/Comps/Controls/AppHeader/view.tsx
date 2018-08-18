import * as React from 'react';
const style = require('./style');

import Logo from 'Controls/Logo';
import SearchBar from 'Controls/SearchBar';

export default class extends React.Component<{}, {}> {
	render(): JSX.Element {
		return (
			<header className={style.AppHeader}>
				<ul className={style.AppNavigation}>
					<li className={style.NavItemLink}>item 1</li>
					<li className={style.NavItemLink}>item 2</li>
					<li className={style.NavItemLogo}><Logo /></li>
					<li className={style.NavItemSearch}><SearchBar /></li>
				</ul>
			</header>
		);
	}
}
