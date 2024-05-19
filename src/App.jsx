import React from 'react';
import Header from './components/Header';
import cl from './App.module.scss';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<div className={cl.main}>
			<Header />
			<Outlet />
		</div>
	);
};

export default App;
