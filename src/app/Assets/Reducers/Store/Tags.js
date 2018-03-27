import { SimpleReducer, SimpleStoreAll } from 'Modules/SimpleFetch';

export default SimpleReducer('tag', {
	...SimpleStoreAll('tag')
});
