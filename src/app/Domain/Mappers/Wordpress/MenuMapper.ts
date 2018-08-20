import Menu from "Models/Menu";
import MenuItemMapper from "Mappers/Wordpress/MenuItemMapper";
import { GetMenuByLocation_menus_nodes } from "Entities/Wordpress/GetMenuByLocation";

export default class {
	static Map( menu: GetMenuByLocation_menus_nodes ): Menu {
		if (menu.name == null) { throw Error('name cannot be null'); }
		if (menu.menuItems == null) { throw Error('menuItems cannot be null'); }

		return new Menu(
			menu.name,
			MenuItemMapper.MapAll(menu.menuItems.nodes as any)
		);
	}
}
