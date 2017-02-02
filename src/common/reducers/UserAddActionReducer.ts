import {initialState, SET_MODEL, SET_MODAL_STATE} from '../actions/UserAddActions';

/*Action reducer for user add component*/
export default function userAddReducer(state = initialState, action) {

	switch (action.type) {

		case SET_MODEL: {
			return state.set('model', action.model);
		}

		case SET_MODAL_STATE: {
			return state.set('showModal', action.showModal);
		}

		default: {
			return state;
		}
	}

}