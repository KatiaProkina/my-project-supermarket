import{
    createBrowserRouter,
}from "react-router-dom";
import {MainPage,ErrorPage,LoginPage,ProtectedRoutes,CatalogPage,ElementPage} from '../pages'


export const router = createBrowserRouter([
    {
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
               children:[
                {
                    index:true,
                    element: <MainPage/>
                   
                },
                {
                     path: '/login',
                     element: <LoginPage/>
        
                }
               ]
        
            },
            {
                path: '/catalog',
                element: <ProtectedRoutes/>,
                children:[
                    {
                        index: true,
                        element: <CatalogPage/>
                        
                    },
                    {
                        path:':id',
                        element: <ElementPage/>
                    }
                ]
            }
        

        ]
    }
   
])