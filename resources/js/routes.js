import Home from './components/Home'
import Profile from './components/Profile'
import Adverts from './components/Adverts'
import Login from './components/auth/Login'
import Registrate from './components/auth/Registrate'

export const routes = [
   {
      path : '/',
      component : Home,
      meta : {
         requiresAuth : true,
      }
   },
   {
      path : '/registrate',
      component : Registrate,
   },
   {
      path : '/login',
      component : Login,
   },
   {
      path : '/profile',
      component : Profile,
      meta : {
         requiresAuth : true,
      }
   },
   {
      path : '/adverts',
      component : Adverts,
      meta : {
         requiresAuth : true,
      }
   }
]