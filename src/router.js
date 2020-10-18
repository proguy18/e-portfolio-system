import {Switch,Route,Redirect } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux'
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import TestPage from './components/TestPage';
import Portfolio from './components/Portfolio';
import StudentInformation from './components/StudentInformation'
import AboutMe from './components/AboutMe'
import Logout from './components/Logout'
import Artist from './components/Artist/Artist';

/**
 * import all routes and register routes;
 * @requiresAuth : current route require auth
 * @role : current route require role 
 */
const Routes = [
    {
        path:"/",
        exact:true,
        requiresAuth :false,
        component:Homepage
    },
    {
        path:"/login",
        exact:true,
        requiresAuth :false,
        component:Login
    },
    {
        path:"/register",
        exact:true,
        component:Register
    },
    {
        path:"/info",
        exact:true,
        requiresAuth:true,
        role:"CS",
        component:StudentInformation
    },
    {
        path:"/portfolio",
        exact:true,
        requiresAuth:true,
        role:['CS','Arts'],
        component:Portfolio
    },
    {
        path:"/aboutme",
        exact:true,
        requiresAuth:true,
        role:['CS','Arts'],
        component:AboutMe
    },
    {
        path:"/logout",
        exact:true,
        requiresAuth:true,
        component:Logout
    },
    {
        path:"/artist",
        exact:true,
        requiresAuth:true,
        component:Artist
    },
    {
        path:"/dev",
        exact:true,
        requiresAuth:true,
        component:TestPage
    },
    {
        path:"/temp",
        exact:true,
        requiresAuth:true,
        role:['CS','Arts'],
        component:Portfolio
    }
]

/**
 * auth router component
 */

export default function Router() {
    const auth = useSelector(store => store.userAuth && store.userAuth.token);
    const user = useSelector(store => store.userAuth && store.userAuth.user);
    return (
        <Switch>
            {
                Routes.map((route) => {   
                 return <Route exact={route.exact} path={route.path} key={route.path} render={
                        () => {
                            if(route.requiresAuth){
                                if(!auth){
                                    return (<Redirect to="/"></Redirect>)
                                }else {
                                    if(route.role){
                                        if(user && route.role.includes(user.portfolio.info.major)){
                                            return <route.component />
                                        }else {
                                            return (<Redirect to="/"></Redirect>)
                                        }
                                    }else {
                                        return <route.component />
                                    }
                                }
                            }else {
                                return <route.component />
                            }
                        }
                    }></Route>
                    
                })
            }
        </Switch>
    )
}