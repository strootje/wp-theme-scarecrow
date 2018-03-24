<?php

namespace Scarecrow\Endpoints\v1;
use Scarecrow\Helpers\DepChecker;

class ThemeModsEndpoint {
	private static $namespace = "scarecrow/v1";
	private static $route = "/theme";

	public static function register() {
		register_rest_route(self::$namespace, self::$route, [
			"method" => \WP_REST_Server::READABLE,
			"callback" => [ get_called_class(), "getThemeMods" ]
		]);
	}

	public static function getThemeMods( $args ) {
		try {
			return [
				"info" => self::info(),
				"menus" => self::menus(),
				"pages" => self::pages()
			];
		}
		catch( \Exception $exc ) {
			$error = [
				"code" => 500
			];

			if (defined("WP_DEBUG")) {
				$error["message"] = $exc->getMessage();
			}

			return [
				"error" => $error
			];
		}
	}

	private static function info() {
		$logo = false;

		if (has_custom_logo()) {
			$logo = [ "url" => get_custom_logo() ];
		}

		return [
			"title" => get_bloginfo("name"),
			"tagline" => get_bloginfo("description"),
			"baseurl" => get_bloginfo("wpurl"),
			"logo" => $logo,
			"support" => [
				"newsletter" => [
					"enabled" => DepChecker::isWpNewsletterApiEnabled(),
					"configured" => DepChecker::isWpNewsletterApiActive()
				]
			]
		];
	}

	private static function menus() {
		$menus = [];
	
		$locations = get_nav_menu_locations();
		foreach($locations as $name => $menuId) {
			$menu = wp_get_nav_menu_object($menuId);
			if (!isset($menu->term_id)) {
				continue;
			}

			$menu->items = wp_get_nav_menu_items($menu->term_id);
			$menus[$name] = [
				"term_id" => $menu->term_id,
				"name" => $menu->name,
				"slug" => $menu->slug,
				"items" => []
			];
	
			foreach($menu->items as $item) {
				$menus[$name]["items"][] = [
					"title" => $item->title,
					"slug" => $item->slug,
					"target" => $item->target,
					"classes" => $item->classes,
					"url" => $item->url
				];
			}
		}
		
		return $menus;
	}

	private static function pages() {
		return get_theme_mod("pages", []);
	}
}
