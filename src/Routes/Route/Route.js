import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import CoursesBuy from "../../components/CoursesBuy/CoursesBuy";
import CoursesDetails from "../../components/CoursesDetails/CoursesDetails";
import Error from "../../components/Error/Error";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
                loader: () => fetch('https://un-courses-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: async ({ params }) => {
                    return fetch(`https://un-courses-server.vercel.app/courses/${params.id}`);
                },
                element: <CoursesDetails></CoursesDetails>
            },
            {
                path: '/coursesbuy/:id',
                loader: async ({ params }) => {
                    return fetch(`https://un-courses-server.vercel.app/courses/${params.id}`);
                },
                element: <PrivateRoute><CoursesBuy></CoursesBuy></PrivateRoute>
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
        element: <Error></Error>
    }
])