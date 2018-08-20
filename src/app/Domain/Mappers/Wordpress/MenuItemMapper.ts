import MenuItem from "Models/MenuItem";
import { GetMenuByLocation_menus_nodes_menuItems_nodes } from "Entities/Wordpress/GetMenuByLocation";


export default class {
	static Map( menuItem: GetMenuByLocation_menus_nodes_menuItems_nodes ): MenuItem {
		if (menuItem.label == null) { throw Error('label cannot be null') };

		return new MenuItem(
			menuItem.id,
			menuItem.label,
			menuItem.url || '',
			menuItem.target || '',
			menuItem.cssClasses as any || []
		);
	}

	static MapAll( menuItems: GetMenuByLocation_menus_nodes_menuItems_nodes[] ): MenuItem[] {
		const items: MenuItem[] = [];

		menuItems.forEach(item => items.push(this.Map(item)));

		return items;
	}
}
