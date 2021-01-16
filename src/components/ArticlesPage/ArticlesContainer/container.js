// External dependencies
import { connect } from 'react-redux';

import { createGetAllArticlesAction } from './../../../store/actionCreators/articles';

// Transform state to component props
function mapStateToProps(state) {
	console.log(state);
	return {
		articles: state.articles.articles,
	};
}

// Transform dispatch to component function props
function mapDispatchToProps(dispatch) {
	return {
		getAllArticles: () =>
			dispatch(createGetAllArticlesAction()),
	};
}

// Export HOC
export default connect(
	mapStateToProps,
	mapDispatchToProps
);
