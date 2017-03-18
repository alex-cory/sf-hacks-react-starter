import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  databaseURL: 'https://my-firebase.firebaseio.com'
})

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider firebaseApp={firebaseApp}>
				<App />
  </Provider>,
document.getElementById('root'))
