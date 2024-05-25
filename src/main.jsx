import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardInfo from './pages/CardInfo.jsx';
import Favorites from './pages/Favorites.jsx';
import Cart from './pages/Cart.jsx';
import Payment from './pages/Payment.jsx';
import Completed from './components/Completed.jsx';
import Main from './components/Main.jsx';
import CartProvider from './services/CartContext.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
	{
		path: '/game-store',
		element: <App />,
		children: [
			{ path: '/game-store/', element: <Main /> },
			{ path: '/game-store/:id', element: <CardInfo /> },
			{ path: '/game-store/favorites', element: <Favorites /> },
			{ path: '/game-store/cart', element: <Cart /> },
			{ path: '/game-store/payment', element: <Payment /> },
			{ path: '/game-store/completed', element: <Completed /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</React.StrictMode>
);
