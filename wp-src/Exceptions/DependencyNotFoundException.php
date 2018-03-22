<?php

namespace Scarecrow\Exceptions;

class DependencyNotFoundException extends \Exception {
	public function __construct( $dependency ) {
		parent::__construct("Dependency [{$dependency}] not found");
	}
}
