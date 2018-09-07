import * as React from 'react';
const style = require('./style');

import { MenuState } from 'Actions/Menus';
import Logo from 'Controls/Logo';
import SearchBar from 'Controls/SearchBar';
import Link from 'Controls/Link';

interface OwnProps {
}

type Props = React.HTMLAttributes<{}> & OwnProps & {
	Menus: MenuState

	GetMenu: () => void
};

export default class extends React.Component<OwnProps, {}> {
	componentWillMount(): void {
		const {
			Menus: { header },
			GetMenu
		} = this.props as Props;

		if (!header) {
			GetMenu();
		}
	}

	render(): JSX.Element {
		const {
			Menus: { header }
		} = this.props as Props;

		return (
			<header className={style.AppHeader}>
				<ul className={style.AppNavigation}>
					{header && header.Items.slice(0, 2).map(item =>
						<li className={style.NavItemLink} key={item.Key}><Link to={item.Link}>{item.Label}</Link></li>
					)}
					<li className={style.NavItemLogo}><Logo /></li>
					<li className={style.NavItemSearch}><SearchBar /></li>
				</ul>
			</header>
		);
	}
}
