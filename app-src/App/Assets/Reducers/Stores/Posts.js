import { SimpleReducer, SimpleStore, SimpleStoreAll } from 'Assets/Helpers/SimpleFetch';

export default SimpleReducer('post', {
	...SimpleStore('post'),
	...SimpleStoreAll('post')
});
