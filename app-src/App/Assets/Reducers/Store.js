import { combineReducers } from 'redux';
import PagesReducer from 'Assets/Reducers/Stores/Pages';
import PostsReducer from 'Assets/Reducers/Stores/Posts';
import ProjectsReducer from 'Assets/Reducers/Stores/Projects';
import TagsReducer from 'Assets/Reducers/Stores/Tags';

export default combineReducers({
	pages: PagesReducer,
	posts: PostsReducer,
	projects: ProjectsReducer,
	tags: TagsReducer
});
