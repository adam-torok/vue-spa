import Home from './components/Home'
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

   }
]