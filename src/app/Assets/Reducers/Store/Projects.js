import { SimpleReducer, SimpleStore, SimpleStoreAll } from 'Modules/SimpleFetch';

export default SimpleReducer('project', {
	...SimpleStore('project'),
	...SimpleStoreAll('project')
});
