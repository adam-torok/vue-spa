import Home from './components/pages/home/Home'
import Profile from './components/pages/profile/index'
import ProfileEdit from './components/pages/profile/edit'
import Settings from './components/pages/settings/Settings'
import Report from './components/pages/report/report'
import PP from './components/pages/privacy/pp'
import Adverts from './components/pages/adverts/Adverts'
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
      path : '/profile/',
      component : Profile,
      meta : {
         requiresAuth : true,
      }
   },
   {
      path : '/profile/edit',
      component : ProfileEdit,
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
   },
   {
      path : '/report',
      component : Report,
      meta : {
         requiresAuth : true,
      }
   },
   {
      path : '/settings',
      component : Settings,
      meta : {
         requiresAuth : true,
      }
   },
   {
      path : '/privacy-policy',
      component : PP,
      meta : {
         requiresAuth : true,
      }
   }
]