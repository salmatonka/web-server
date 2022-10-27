import {createBrowserRouter} from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Course from '../../components/Course/Course';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Details from '../../components/Details/Details';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Main from '../../layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
                path:'/course',
                element:<PrivateRoute>
                    <Course></Course>
                    </PrivateRoute>,
              
            
            },
            {
                path:'/course/:id',
                element:<Course></Course>,
              
            
            },
            {
                path:'/details',
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
              
            
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params}) =>{
                    fetch(`http://localhost:5000/details/${params.id}`)
                }
            },
            {
                path:'/courseDetails',
                element:<CourseDetails></CourseDetails>
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
                path:'/register',
                element:<Register></Register>
            }
        ]
      }


])
