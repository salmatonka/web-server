import {createBrowserRouter} from 'react-router-dom';
import Courses from '../../components/Courses/Courses';
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
                path:'/courses',
                element:<Courses></Courses>
            },
            

            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/',
                element:<Register></Register>
            }
        ]
      }


])
