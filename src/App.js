import React from 'react';
import { route_config } from './routes/config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProvider from './ContextProvider';
import { Toast } from './components';
import './styles/index.css';
import ReactHelmet from './components/helmet/ReactHelmet';

const App = () => {
	return (
		<div>
			<ContextProvider>
				<ReactHelmet />
				<Router>
					<Toast />
					<Routes>
						{route_config.map((item, index) => {
							return (
								<Route key={index} path={item.path} element={item.component} />
							);
						})}
					</Routes>
				</Router>
			</ContextProvider>
		</div>
	);
};

export default App;
