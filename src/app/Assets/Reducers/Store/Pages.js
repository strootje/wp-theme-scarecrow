import { SimpleReducer, SimpleStore, SimpleStoreById } from 'Modules/SimpleFetch';

export default SimpleReducer('page', {
	...SimpleStore('page'),
	...SimpleStoreById('page')
});
