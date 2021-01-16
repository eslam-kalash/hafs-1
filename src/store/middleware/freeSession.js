import history from './../../routes/history';
import { REGISTRATION_FREE_SESSION_ENDPOINT } from './config';
import apiRequest from './apiRequest';

// Middleware
export default store => next => async action => {
	// Invoke the next in the middleware chain
	next(action);

	// Extract type and payload from redux action
	const { type, payload } = action;

	// If type is "SUBMIT_FREE_SESSION"
	if (type === "SUBMIT_FREE_SESSION") {
        // Invoke an API call with action payload credentials
		const response = await apiRequest({
			url: REGISTRATION_FREE_SESSION_ENDPOINT,
			body: payload,
		});

		if (response.ok) {
			history.push('/free-session-done');
        }
    }
}