<?php

namespace Scarecrow\Endpoints\v1;

class ThemeEndpoint {
	private static $namespace = "scarecrow/v1";
	private static $route = "/theme";

	public static function register() {
		register_rest_route(self::$namespace, self::$route, [
			"method" => \WP_REST_Server::READABLE,
			"callback" => [ get_called_class(), "getOptions" ]
		]);
	}

	public static function getOptions( $args ) {
		try {
			return [
				"info" => self::info(),
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
			"logo" => $logo
		];
	}

	private static function pages() {
		return get_theme_mod("pages", []);
	}
}
