import SectionWithProjectsView from './view';
import SectionWithProjectsStyle from './style';
import { FetchProjects } from 'Assets/Actions/Projects';

import { compose } from 'redux';
import { connect } from 'preact-redux';

const mapState = ({ store: { projects } }) => ({
	styles: SectionWithProjectsStyle,
	projects: projects
});

const mapDispatch = ( dispatch ) => ({
	fetchProjects: (...args) => dispatch(FetchProjects(...args))
});

export default compose(
	connect(mapState, mapDispatch)
)(SectionWithProjectsView);
