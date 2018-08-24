module.exports = {
	schemas: {
		Wordpress: {
			schema: "graphql.wordpress.json",
			endpoint: "http://localhost:8080/graphql",

			include: [
				"./src/app/Domain/Queries/**/*.gql"
			]
		}
	}
};
