<?php

namespace Scarecrow\Graphql;
use Scarecrow\Graphql\Types\Post\PostFields;
use Scarecrow\Graphql\Types\Search\SearchQuery;

class Graphql {
	public static function register() {
		if (self::IsGraphqlEnabled()) {
			add_filter("graphql_post_fields", [ PostFields::class, "addFields" ]);
			add_filter("graphql_project_fields", [ PostFields::class, "addFields" ]);
			add_filter("graphql_rootPostsQueryArgs_fields", [ PostFields::class, "addQueryArgs" ]);
			add_filter("graphql_post_object_connection_query_args", [ PostFields::class, "filterQueryArgs" ], 10, 5);
		}
	}

	private static function IsGraphqlEnabled() {
		return class_exists("WPGraphQL");
	}
}
