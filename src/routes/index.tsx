import { createBrowserRouter } from 'react-router-dom';

import ChatBot from '@/pages/ChatBot/ChatBot';
import Home from '@/pages/Home/Home';

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/chatbot', element: <ChatBot /> },
]);
