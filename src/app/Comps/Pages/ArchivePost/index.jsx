import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import find from 'lodash.find';
import { FetchPostBySlug } from 'Assets/Actions/Posts';

export default CreateContainer(view, styles, {
	mapState: ({ store: { posts: { working, nodesById }}}, { postId }) => ({
		working: working,
		post: find(Object.values(nodesById), { slug: postId })
	}),

	mapDispatch: ( dispatch, { postId }) => ({
		fetchPost: () => dispatch(FetchPostBySlug({ slug: postId }))
	})
});
