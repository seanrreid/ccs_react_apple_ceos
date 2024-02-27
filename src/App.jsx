import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './routes/Home';
import Ceos, { loader as ceoLoader } from './routes/Ceos';
import SingleCeo, { loader as singleCeoLoader } from './routes/SingleCeo';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/ceos',
                element: <Ceos />,
                loader: ceoLoader,
            },
            {
                path: '/ceos/:slug',
                element: <SingleCeo />,
                loader: singleCeoLoader,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
