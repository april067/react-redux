import { createStore } from 'redux';

const ADD = 'ADD';

const mapStateToProps = (state) => ({ messages: state });
const mapDispatchToProps = (dispatch) => {
	return {
		submitNewMessage: (message) => {
			dispatch(addMessage(message));
		},
	};
};

const addMessage = (message) => ({
	type: ADD,
	message,
});

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.message];

		default:
			return state;
	}
};

const store = createStore(messageReducer);

// store.dispatch(addMessage('Read the docs'));
// console.log(store.getState());

export { store, mapStateToProps, mapDispatchToProps };
