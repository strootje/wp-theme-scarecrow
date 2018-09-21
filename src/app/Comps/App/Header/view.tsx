import * as React from 'react';

import { MenuState } from 'Actions/Menus';
import Link from 'Controls/Link';
import Logo from 'Controls/Logo';
import SearchBar from 'Controls/SearchBar';
import BaseComponent from 'Partials/BaseComponent';

const style = require('./style');

export interface DispatchProps {
	GetMenu: () => Promise<any>
}

type OwnProps = React.HTMLAttributes<Header> & {
}

type Props = OwnProps & DispatchProps & {
	Menus: MenuState
};

export default class Header extends BaseComponent<OwnProps, Props> {
	async componentWillMount(): Promise<void> {
		const {
			Menus: { header },

			GetMenu
		} = this.props;

		if (!header) {
			await GetMenu();
		}
	}

	render(): JSX.Element {
		const {
			Menus: { header }
		} = this.props;

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
