import { createBrowserRouter } from 'react-router-dom';

import Documents from '@/pages/Home/Documents/Documents';
import Home from '@/pages/Home/Home';

export const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/documents', element: <Documents /> },
]);
