import { createBrowserRouter } from 'react-router-dom';

import ChatBot from '@/pages/ChatBot/ChatBot';
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
	{ path: '/chatbot', element: <ChatBot /> },
]);
