import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

export function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT: 
			return [{
				id: action.id,
				text: action.text,
				thumb_up: 0,
				thumb_down: 0
			}, ...state.comments]
		case REMOVE_COMMENT: 
			return state.filter(comment => comment.id != action.id)
		case EDIT_COMMENT:
			return state.map(comment => {
					if(comment.id === action.id) {
						comment.text = action.text;
					}
					return comment;
				})
		case THUMB_UP_COMMENT:
			return state.map(comment => {
					if(comment.id === action.id) {
						comment.thumb_up = action.thumb_up;
					}
					return comment;
				})
		case THUMB_DOWN_COMMENT
			return state.map(comment => {
					if(comment.id === action.id) {
						comment.thumb_down = action.thumb_down;
					}
					return comment;
				})
		default
			return state;	
	}
}
