
import AddPage from "../pages/AddPage";
import Detail from "../pages/DetailPage";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import ServicesPage from "../pages/ServicesPage";
import UserRoot from "../pages/UserRoot";

export let ROUTES = [
    {
        path: "/",
        element:<UserRoot/>,
        children: [
            {
                path: "",
                element:<Home/>
            },
            {
                path:"/servicespage",
                element:<ServicesPage/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
            {
                path:"/addpage",
                element:<AddPage/>
            },
            {
                path:"*",
                element:<NoPage/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            }
        ]
    }
]