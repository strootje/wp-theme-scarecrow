<?php

namespace Scarecrow\Endpoints\Graphql;
use Scarecrow\Endpoints\Graphql\Types\Page\PageFields;
use Scarecrow\Endpoints\Graphql\Types\Post\PostFields;
use Scarecrow\Endpoints\Graphql\Types\Settings\ReadingSettingsFields;

class GraphqlEndpoint {
	public static function register() {
		if (self::IsGraphqlEnabled()) {
			add_filter("graphql_page_fields", [ PageFields::class, "addFields" ]);

			add_filter("graphql_post_fields", [ PostFields::class, "addFields" ]);
			add_filter("graphql_rootPostsQueryArgs_fields", [ PostFields::class, "addQueryArgs" ]);
			add_filter("graphql_post_object_connection_query_args", [ PostFields::class, "filterQueryArgs" ], 10, 5);

			add_filter("graphql_reading_fields", [ ReadingSettingsFields::class, "addFields" ]);
			add_filter("graphql_settings_fields", [ ReadingSettingsFields::class, "addGlobalFields" ]);
		}
	}

	private static function IsGraphqlEnabled() {
		return class_exists("WPGraphQL");
	}
}
