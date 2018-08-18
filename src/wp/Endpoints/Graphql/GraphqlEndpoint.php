<?php

namespace Scarecrow\Endpoints\Graphql;
use Scarecrow\Endpoints\Graphql\Types\Post\PostFields;

class GraphqlEndpoint {
	public static function register() {
		if (self::IsGraphqlEnabled()) {
			add_filter("graphql_post_fields", [ PostFields::class, "addFields" ]);
			add_filter("graphql_rootPostsQueryArgs_fields", [ PostFields::class, "addQueryArgs" ]);
			add_filter("graphql_post_object_connection_query_args", [ PostFields::class, "filterQueryArgs" ], 10, 5);
		}
	}

	private static function IsGraphqlEnabled() {
		return class_exists("WPGraphQL");
	}
}
