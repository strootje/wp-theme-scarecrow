import MenuItem from "Models/MenuItem";
import { FetchMenuByLocation_menus_nodes_menuItems_nodes } from "Entities/Wordpress/FetchMenuByLocation";


export default class {
	static Map( menuItem: FetchMenuByLocation_menus_nodes_menuItems_nodes ): MenuItem {
		if (menuItem.label == null) { throw Error('label cannot be null') };

		return new MenuItem(
			menuItem.id,
			menuItem.label,
			menuItem.url || '',
			menuItem.target || '',
			menuItem.cssClasses as any || []
		);
	}

	static MapAll( menuItems: FetchMenuByLocation_menus_nodes_menuItems_nodes[] ): MenuItem[] {
		const items: MenuItem[] = [];

		menuItems.forEach(item => items.push(this.Map(item)));

		return items;
	}
}
