import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import AddNewCoffee from '../Pages/AddNewCoffee/AddNewCoffee';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/add-new-coffee",
                element:<AddNewCoffee></AddNewCoffee>
            }
        ]
    }
])


export default router;