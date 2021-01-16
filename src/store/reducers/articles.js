// Action type handler object
const HANDLERS = {
	["ADD_ARTICLES"]: (state, action) => ({
        ...state,
        articles: action.payload
    }),
}

const INITIAL_STATE = {
	articles: [],
};

export default (state = INITIAL_STATE, action) =>
    HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state;

