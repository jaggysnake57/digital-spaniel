// react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import App from './App';

//redux
import { store } from './app/store';
import { Provider } from 'react-redux';

// styles
import './styles.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
