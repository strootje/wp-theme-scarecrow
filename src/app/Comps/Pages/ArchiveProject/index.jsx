import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import find from 'lodash.find';
import { FetchProjectBySlug } from 'Assets/Actions/Projects';

export default CreateContainer(view, styles, {
	mapState: ({ store: { projects: { working, nodesById }}}, { projectId }) => ({
		working: working,
		project: find(Object.values(nodesById), { slug: projectId })
	}),

	mapDispatch: ( dispatch, { projectId }) => ({
		fetchProject: () => dispatch(FetchProjectBySlug({ slug: projectId }))
	})
});
