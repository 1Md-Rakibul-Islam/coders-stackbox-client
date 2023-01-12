import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }
        ]
    },
    {
        path:'*',
        element: <div className="texl-3xl text-center">Page is not available</div>
    }
]);

export default router