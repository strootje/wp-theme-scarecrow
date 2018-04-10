import { CreateContainer } from 'Assets/Helpers/SimpleFetch';
import view from './view';
import styles from './styles';

import { Subscribe } from 'Assets/Actions/Newsletter';

export default CreateContainer(view, styles, {
	mapState: ({ state: { locales }}) => ({
		locale: locales.sidebar
	}),

	mapDispatch: () => ({
		signup: ( email, member ) => dispatch(Subscribe({ email: email, member: member }))
	})
});
