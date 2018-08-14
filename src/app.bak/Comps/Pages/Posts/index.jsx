import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { FetchPosts } from 'Assets/Actions/Posts';

export default CreateContainer(view, styles, {
	mapState: ({ store: { posts }}) => ({
		posts: posts
	}),

	mapDispatch: ( dispatch ) => ({
		fetchPosts: () => dispatch(FetchPosts())
	})
});
