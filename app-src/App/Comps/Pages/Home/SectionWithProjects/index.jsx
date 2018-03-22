import SectionWithProjectsView from './view';
import SectionWithProjectsStyle from './style';
import { FetchProjects } from 'Actions/Projects';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: SectionWithProjectsStyle,
	projects: state.dbdata.projects
});

const mapDispatch = ( dispatch ) => ({
	fetchProjects: (...args) => dispatch(FetchProjects(...args))
});

export default compose(
	connect(mapState, mapDispatch)
)(SectionWithProjectsView);
