import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';
export default CreateContainer(view, styles, {
	mapState: () => ({
		filter: ( data ) => Object.values(data.nodesById)
	})
});
