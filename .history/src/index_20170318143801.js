import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-firebase'
import { initializeApp } from 'firebase'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

const firebaseApp = initializeApp({
  databaseURL: 'https://sf-hacks-react-starter.firebaseio.com/'
})

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider firebaseApp={firebaseApp}>
				<MuiThemeProvider>
						<App />
    </MuiThemeProvider>
  </Provider>,
document.getElementById('root'))
