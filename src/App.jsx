import React from 'react';
import Header from './components/Header';
import cl from './App.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './index.module.scss';

const App = () => {
	return (
		<div className={cl.main}>
			<Header />
			<div className={cl.mid}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default App;
