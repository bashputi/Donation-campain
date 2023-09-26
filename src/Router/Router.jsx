import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../layOut/pages/Home/Home";
import Donation from "../layOut/pages/Donation/Donation";
import Statistics from "../layOut/pages/Statistics/Statistics";
import Donat from "../layOut/pages/Donat/Donat";
import ErrorPage from "../layOut/pages/Error/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('./donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donations/:id',
                element: <Donat></Donat>,
                loader: () => fetch('/donation.json')
            }

        ]   
    }
])


export default myCreatedRoute;