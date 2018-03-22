<?php

namespace Scarecrow\Helpers;
use Scarecrow\Exceptions\DependencyNotFoundException;

class DepChecker {
	public static function throwIfNotFound( $dep ) {
		if (!class_exists($dep)) {
			throw new DependencyNotFoundException($dep);
		}
	}

	public static function isWpNewsletterApiEnabled() {
		return class_exists("\WPNewsletterApi\Client\ClientFactory");
	}

	public static function isWpNewsletterApiActive() {
		return self::isWpNewsletterApiEnabled()
			&& \WPNewsletterApi\Client\ClientFactory::canCreate();
	}
}
