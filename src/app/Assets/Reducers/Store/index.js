import { combineReducers } from 'redux';
import pages from './Pages';
import posts from './Posts';
import projects from './Projects';
import tags from './Tags';

export default combineReducers({
	pages: pages,
	posts: posts,
	projects: projects,
	tags: tags
});
