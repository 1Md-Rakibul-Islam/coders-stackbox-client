import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CommunitySupport from "../../Pages/CommunitySupport/CommunitySupport";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/community",
        element: <CommunitySupport></CommunitySupport>,
      },
      {
        path: "login", 
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SingUp></SingUp>
      }
    ],
  },
  {
    path: "*",
    element: <div className="texl-3xl text-center">Page is not available</div>,
  },
]);

export default router;
