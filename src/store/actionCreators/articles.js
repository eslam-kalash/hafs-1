export function createGetAllArticlesAction() {
	return {
        type: 'GET_ALL_ARTICLES'
	};
}

export function createAddArticlesAction(payload) {
	return {
        type: 'ADD_ARTICLES',
        payload
	};
}
