import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../Layout/Main";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <div>Error page</div>
    }
])