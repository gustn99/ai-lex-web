import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import ChatBot from '@/pages/ChatBot/ChatBot';

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/chatbot', element: <ChatBot /> },
]);
