import { createBrowserRouter } from 'react-router-dom';

import DocumentDetail from '@/pages/Documents/DocumentDetail';
import Home from '@/pages/Home/Home';

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{
		path: '/documents',
		children: [
			// {
			// 	index: true, // /documents
			// 	element: <DocumentList />,
			// },
			{
				path: ':id', // /documents/:id
				element: <DocumentDetail />,
			},
		],
	},
]);
