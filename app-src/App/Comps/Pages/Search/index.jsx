import PageSearchView from './view';
import PageSearchStyle from './style';
import { Search } from 'Actions/Search';

import { compose } from 'recompose';
import { connect } from 'preact-redux';

const mapState = ( state ) => ({
	styles: PageSearchStyle,
	loading: state.dbdata.search.loading,
	results: state.dbdata.search.data
});

const mapDispatch = ( dispatch ) => ({
	search: ( query ) => dispatch(Search(query))
});

export default compose(
	connect(mapState, mapDispatch)
)(PageSearchView);
