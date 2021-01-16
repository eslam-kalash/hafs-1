import { createAddArticlesAction } from './../actionCreators/articles';
import { GET_ARTICLES_ENDPOINT } from './config';
import apiRequest from './apiRequest';

// Middleware
export default store => next => async action => {
	// Invoke the next in the middleware chain
	next(action);

	// Extract type and payload from redux action
	const { type } = action;

	// If type is "GET_ALL_ARTICLES"
	if (type === "GET_ALL_ARTICLES") {
        // Invoke an API call with action payload credentials
		const response = await apiRequest({
			url: GET_ARTICLES_ENDPOINT,
		});

		if (response.ok) {
            const body = await response.json();
            createAddArticlesAction(body);
        }
    }
}