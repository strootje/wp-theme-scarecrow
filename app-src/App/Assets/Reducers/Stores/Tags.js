import { SimpleReducer, SimpleStoreAll } from 'Assets/Helpers/SimpleFetch';

export default SimpleReducer('tag', {
	...SimpleStoreAll('tag')
});
