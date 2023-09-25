import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layOut/MainLayOut";
import Home from "../layOut/pages/Home/Home";
import Donation from "../layOut/pages/Donation/Donation";
import Statistics from "../layOut/pages/Statistics/Statistics";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }

        ]   
    }
])


export default myCreatedRoute;