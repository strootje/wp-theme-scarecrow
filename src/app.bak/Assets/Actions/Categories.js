import gql from 'graphql-tag';
import { BuildActions } from 'Assets/Helpers/SimpleFetch';

const fixThumbs = ( nodes ) => nodes.map(({ posts, ...rest }) => {
	return { ...rest, ...posts.nodes[0] };
});

module.exports = {
	...BuildActions({ singular: 'category', plural: 'categories' }, {
		FetchCategoryById: ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query( $caseId: Int! ) {
				categories(first: 1, where: { include: [ $caseId ] }) {
					nodes {
						categoryId
						title: name
						slug
						link
						content: description

						posts(last: 1) {
							nodes {
								date
								thumbnail
								thumbnail_hero
								thumbnail_banner
								thumbnail_banner_hero

								author {
									username
								}
							}
						}
					}
				}
			}`
		}).then(
			({ data: { categories } }) => resolve({ nodes: fixThumbs(categories.nodes) }),
			({ message }) => reject(message)
		),

		FetchCategoryBySlug: ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query( $caseId: Int!, $slug: String! ) {
				categories(first: 1, where: { parent: $caseId, search: $slug }) {
					nodes {
						categoryId
						title: name
						slug
						link
						content: description

						posts(last: 1) {
							nodes {
								date
								thumbnail
								thumbnail_hero
								thumbnail_banner
								thumbnail_banner_hero

								author {
									username
								}
							}
						}
					}
				}
			}`
		}).then(
			({ data: { categories } }) => resolve({ nodes: fixThumbs(categories.nodes) }),
			({ message }) => reject(message)
		),

		FetchCategories: ({ params, client, resolve, reject }) => client.query({
			variables: params,
			query: gql`query( $caseId: Int! ) {
				categories(where: { parent: $caseId, hideEmpty: true }) {
					nodes {
						categoryId
						title: name
						slug
						link
						content: description

						posts(last: 1) {
							nodes {
								date
								thumbnail
								thumbnail_hero
								thumbnail_banner
								thumbnail_banner_hero

								author {
									username
								}
							}
						}
					}
				}
			}`
		}).then(
			({ data: { categories } }) => resolve({ nodes: fixThumbs(categories.nodes) }),
			({ message }) => reject(message)
		)
	})
};
