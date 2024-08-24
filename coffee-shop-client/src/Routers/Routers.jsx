import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import AddNewCoffee from '../Pages/AddNewCoffee/AddNewCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee/UpdateCoffee';
import CoffeeDetails from '../Pages/CoffeeDetails/CoffeeDetails';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/coffees")
            },
            {
                path: "/add-new-coffee",
                element: <AddNewCoffee></AddNewCoffee>
            },
            {
                path: "/update-coffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
            },
            {
                path: "/coffee-detail/:id",
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
            }
        ]
    }
])


export default router;