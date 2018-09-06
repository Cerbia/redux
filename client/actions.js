import uuid from uuid

export const ADD_COMMENT = 'ADD_COMMENT';

//kreatory akcji
function addComment(text) {
	return ({
		type: 'ADD_COMMENT',
		id: uuid.v4()
		text
	});
}


export const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(id, text) {
	return ({
		type: 'EDIT_COMMENT',
		id,
		text
	});
}


export const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
	return ({
		type: 'REMOVE_COMMENT',
		id
	});
}


export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(id) {
	return ({
		type: 'THUMB_UP_COMMENT',
		id,
		thumb_up: thumb_up++
	});
}


export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbDownComment(id) {
	return({
		type: 'THUMB_DOWN_COMMENT',
		id,
		thumb_down: thumb_down++
	});
}

export const ADD_USER = 'ADD_USER';

function addUser(firstName, lastName) {
	return ({
		type: 'ADD_USER',
		id: uuid.v4(),
		firstName: firstName,
		lastName: lastName
	});
}

//dispatch(addComment('New comment'));
// bindActionCreators
//lol - co z tym zrobić?
const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));
