import { createStore } form 'redux';
import ReactDOM from 'react-dom'

import reducers from './reducers';

const store = createStore(reducers);

//getState, dispatch, subscribe

store.subscribe(() => console.log('Zmiana w drzewie stanu'));
var unsubscribe = store.subscribe(() => console.log('Zmiana w drzewie stanu'));
unsubscribe();

store.subscribe(() => console.log(store.getState()));

//re-renderowanie komponentu reactowego
store.subscribe(() => {
	const comments = store.getState().comments;
	ReactDOM.render(<CommentsList comments={comments} />, document.getElementById('commentList'));
})