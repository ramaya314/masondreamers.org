import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Master from './Master';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

let preloadedState = null;
if(window.DATA && window.DATA.length > 0) {
	// Grab the state from a global variable injected into the server-generated HTML
	try {
		preloadedState = JSON.parse(atob(window.DATA));
	} catch(e) {}
	// Allow the passed state to be garbage-collected
	delete window.DATA;
}
const store = preloadedState ? createStore(allReducers, preloadedState) : createStore(allReducers);

const generateClassName = createGenerateClassName();

ReactDOM.hydrate(
  <JssProvider generateClassName={generateClassName}>
  	<Provider store={store}>
  		<Router onUpdate={() => window.scrollTo(0, 0)}>
  			{Master}
  		</Router>
  	</Provider>
  </JssProvider>,
  document.getElementById('root'), () => {
    // We don't need the static css any more once we have launched our application.
    //const ssStyles = document.getElementById('server-side-styles')
    //ssStyles.parentNode.removeChild(ssStyles)
  }
);
