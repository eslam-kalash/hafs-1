// External dependencies
import { connect } from 'react-redux';

import { createSubmitFreeSessionAction } from './../../store/actionCreators/freeSession';

// Transform dispatch to component function props
function mapDispatchToProps(dispatch) {
	return {
		submitFreeSession: user =>
			dispatch(createSubmitFreeSessionAction(user)),
	};
}

// Export HOC
export default connect(
	null,
	mapDispatchToProps
);
