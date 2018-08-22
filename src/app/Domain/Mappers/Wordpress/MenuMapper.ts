import Menu from "Models/Menu";
import MenuItemMapper from "Mappers/Wordpress/MenuItemMapper";
import { WP_FetchMenuByLocation_menus, WP_FetchMenuByLocation_menus_nodes } from "Entities/Wordpress/WP_FetchMenuByLocation";

export default class {
	static Map( menu: WP_FetchMenuByLocation_menus_nodes | null ): Menu {
		if (menu == null) { throw Error('menu cannot be null'); }
		if (menu.name == null) { throw Error('name cannot be null'); }
		if (menu.menuItems == null) { throw Error('menuItems cannot be null'); }

		return new Menu(
			menu.name,
			MenuItemMapper.MapAll(menu.menuItems.nodes)
		);
	}

	static MapSingle( menus: WP_FetchMenuByLocation_menus | null ): Menu {
		if (menus == null) { throw Error('menus cannot be null'); }
		if (menus.nodes == null) { throw Error('nodes cannot be null'); }
		if (menus.nodes.length !== 1) { throw Error('menus must have 1 node'); }

		return this.Map(menus.nodes[0]);
	}
}
