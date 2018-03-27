import { SimpleReducer, SimpleStore, SimpleStoreAll } from 'Modules/SimpleFetch';

export default SimpleReducer('post', {
	...SimpleStore('post'),
	...SimpleStoreAll('post')
});
