import Menu from "Models/Menu";
import MenuItemMapper from "Mappers/Wordpress/MenuItemMapper";
import { FetchMenuByLocation_menus_nodes } from "Entities/Wordpress/FetchMenuByLocation";

export default class {
	static Map( menu: FetchMenuByLocation_menus_nodes ): Menu {
		if (menu.name == null) { throw Error('name cannot be null'); }
		if (menu.menuItems == null) { throw Error('menuItems cannot be null'); }

		return new Menu(
			menu.name,
			MenuItemMapper.MapAll(menu.menuItems.nodes as any)
		);
	}
}
