import {createBrowserRouter} from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Course from '../../components/Course/Course';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import Details from '../../components/Details/Details';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import FAQ from '../../components/FAQ/FAQ';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Topics from '../../components/Topics/Topics';
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
                loader:()=>fetch(`http://localhost:5000/items`),
                element:<PrivateRoute>
                    <Course></Course>
                    </PrivateRoute>,
              
            
            },
            {
                path:'/course',
                element:<Course></Course>,
              
            
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
                    fetch(`http://localhost:5000/course/${params.id}}`)
                }
            },
            {
                path:'/topics',
                element:<Topics></Topics>,
                loader:()=>{
                    fetch(`http://localhost:5000/course`)
                }
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
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
