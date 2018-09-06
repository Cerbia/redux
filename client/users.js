import {ADD_USER} from './actions'

export function users(state = [], aciton) {
	switch(aciton.type) {
		case ADD_USER: 
			return [{
				id: aciton.id,
				firstName: aciton.firstName,
				lastName: aciton.lastName,
				comments: []
			}, ...state]
		default
			return state;
	}
}