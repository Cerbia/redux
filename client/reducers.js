import {combineReducers} form 'redux';

import comments from './comments';
import users from '.users';


const initialState = {
		comments: [],
		users: []
	};

export const app = combineReducers({
	comments,
	users
});


/*
function app(state = initialState, action) {
	switch(action.type) {
		case ADD_COMMENT: 
			return {
				comments: comments(state, action),
				users: users(state, action)
			}
		case REMOVE_COMMENT: 
			return Object.assign({}, state, {
				//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
				comments: state.comments.filter(comment => comment.id != action.id)
			})
		case EDIT_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.map(comment => {
					if(comment.id === action.id) {
						comment.text = action.text;
					}
					return comment;
				})
			})
		case THUMB_UP_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.map(comment => {
					if(comment.id === action.id) {
						comment.thumb_up = action.thumb_up;
					}
					return comment;
				})
			})
		case THUMB_DOWN_COMMENT
			return Object.assign({}, state, {
				comments: state.comments.map(comment => {
					if(comment.id === action.id) {
						comment.thumb_down = action.thumb_down;
					}
					return comment;
				})
			})
		default
			return state;		
	}
}
*/




