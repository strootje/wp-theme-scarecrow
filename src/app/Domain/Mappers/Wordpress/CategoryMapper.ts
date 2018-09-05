import Category from "Models/Category";
import { WP_CategoryFields } from "Entities/Wordpress/WP_CategoryFields";
import { WP_FetchPosts_posts_nodes_categories } from "Entities/Wordpress/WP_FetchPosts";

type WPCategory = WP_CategoryFields | null;
type WPCategories = WP_FetchPosts_posts_nodes_categories | null;

export default class {
	static Map( category: WPCategory ): Category {
		if (category == null) { throw Error('category cannot be null'); }
		if (category.categoryId == null) { throw Error('category.categoryId cannot be null'); }
		if (category.name == null) { throw Error('category.name cannot be null'); }
		if (category.link == null) { throw Error('category.categoryId cannot be null'); }

		return new Category(
			category.categoryId,
			category.name,
			category.link,
			category.count || 0);
	}

	static MapAll( categories: WPCategories ): Category[] {
		if (categories == null) { throw Error('categories cannot be null'); }
		if (categories.nodes == null) { throw Error('categories.nodes cannot be null'); }

		const results: Category[] = [];
		categories.nodes.forEach(category => results.push(this.Map(category)));

		return results;
	}
};
