import {createBrowserRouter} from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Course from '../../components/Course/Course';
import Details from '../../components/Details/Details';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Main from '../../layout/Main';

export const routes = createBrowserRouter([
    
      {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course/:id',
                element:<Course></Course>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/',
                element:<Register></Register>
            }
        ]
      }


])
