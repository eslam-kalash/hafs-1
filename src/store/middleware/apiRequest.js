export default ({ url, body }) =>
	fetch(url, {
		method: body ? 'POST' : 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});