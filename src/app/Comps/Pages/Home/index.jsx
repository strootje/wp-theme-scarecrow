import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { FetchPosts } from 'Assets/Actions/Posts';
import { FetchProjects } from 'Assets/Actions/Projects';

export default CreateContainer(view, styles, {
	mapState: ({ store: { posts, projects }}) => ({
		posts: posts,
		projects: projects
	}),

	mapDispatch: ( dispatch ) => ({
		fetchPosts: () => dispatch(FetchPosts()),
		fetchProjects: () => dispatch(FetchProjects())
	})
});
