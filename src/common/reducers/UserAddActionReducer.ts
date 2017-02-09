import {initialState, SET_MODAL_STATE} from '../actions/UserAddActions';

/*Action reducer for user add component*/
export default function userAddReducer(state = initialState, action) {

	switch (action.type) {

		case SET_MODAL_STATE: {
			return state.set('showModal', action.showModal);
		}

		default: {
			return state;
		}
	}

}