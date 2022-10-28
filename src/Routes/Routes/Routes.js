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
                loader:()=>fetch(`https://web-technology-server2.vercel.app/items`),
                element:<PrivateRoute>
                    <Course></Course>
                    </PrivateRoute>,
              
            
            },

            {
                path:'/course/:id',
                element:<Course></Course>,
                loader:({params})=>{
                    fetch(`https://web-technology-server2.vercel.app/category/${params.id}`)}
            
            },
            {
                path:'/courseDetails',
                element:<CourseDetails></CourseDetails>,
               
            },
            {
                path:'/topics',
                element:<Topics></Topics>,
                loader:()=>fetch(`https://web-technology-server2.vercel.app/course`)
                  
                
            },
            {
                path:'/details',
                element:<PrivateRoute>

                    <Details></Details>
                </PrivateRoute>,
              
            
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
