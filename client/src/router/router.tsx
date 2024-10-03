import { createBrowserRouter } from 'react-router-dom'
import Auth from '../pages/Auth'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'auth',
				element: <Auth />,
			},
		],
	},
])
