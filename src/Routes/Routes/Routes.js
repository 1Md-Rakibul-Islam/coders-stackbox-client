import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";


// CodersStackBox
// Home
// About Us
// Documentation
// Community Support
// Login
// Sign Up


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            }
        ]
    },
    {
        path:'*',
        element: <div className="texl-3xl text-center">Page is not available</div>
    }
]);

export default router