import { SimpleReducer, SimpleStore, SimpleStoreAll } from 'Assets/Helpers/SimpleFetch';

export default SimpleReducer('project', {
	...SimpleStore('project'),
	...SimpleStoreAll('project')
});
