import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { FetchProjects } from 'Assets/Actions/Projects';

export default CreateContainer(view, styles, {
	mapState: ({ store: { projects }}) => ({
		projects: projects
	}),

	mapDispatch: ( dispatch ) => ({
		fetchProjects: () => dispatch(FetchProjects())
	})
});
