import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';
export default CreateContainer(view, styles, {
	mapState: ({ state: { locales, menus, info: { support }}}) => ({
		locale: locales.sidebar,
		menu: menus.sidebar,
		support: support
	})
});
