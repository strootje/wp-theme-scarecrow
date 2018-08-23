import MenuItem from "Models/MenuItem";
import { WP_FetchMenuByLocation_menus_nodes_menuItems_nodes } from "Entities/Wordpress/WP_FetchMenuByLocation";

export default class {
	static Map( menuItem: WP_FetchMenuByLocation_menus_nodes_menuItems_nodes | null ): MenuItem {
		if (menuItem == null) { throw Error('menuItem cannot be null'); }
		if (menuItem.label == null) { throw Error('label cannot be null') };

		return new MenuItem(
			menuItem.id,
			menuItem.label,
			menuItem.url || '',
			menuItem.target || '',
			menuItem.cssClasses as any || []
		);
	}

	static MapAll( menuItems: (WP_FetchMenuByLocation_menus_nodes_menuItems_nodes | null)[] | null ): MenuItem[] {
		if (menuItems == null) { throw Error('menuItems cannot be null'); }

		const results: MenuItem[] = [];
		menuItems.forEach(item => results.push(this.Map(item)));

		return results;
	}
}
