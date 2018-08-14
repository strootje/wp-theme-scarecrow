import { combineReducers } from 'redux';
import categories from './Categories';
import pages from './Pages';
import posts from './Posts';
import repositories from './Repositories';
import tags from './Tags';

export default combineReducers({
	categories: categories,
	pages: pages,
	posts: posts,
	repositories: repositories,
	tags: tags
});
