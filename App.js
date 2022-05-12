import React from 'react';
import Store from './src/store';
import { Provider } from 'react-redux';
import Root from './src/index';

const App = () => {
	return (
		<Provider store={Store}>
			<Root />
		</Provider>
	);
};

export default App;
