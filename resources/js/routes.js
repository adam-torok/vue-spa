import Home from './pages/home/Home'
import showProfile from './pages/profile/show'
import Profile from './pages/profile/index'
import ProfileEdit from './pages/profile/edit'
import Settings from './pages/settings/Settings'
import Report from './pages/report/report'
import PP from './pages/privacy/pp'
import Adverts from './pages/adverts/Adverts'
import SingleAdvert from './pages/adverts/SingleAdvert'
import AdvertCreate from './pages/adverts/NewAdvert'
import Login from './pages/auth/Login'
import Registrate from './pages/auth/Registrate'

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
      path : '/profile/1',
      component : showProfile,
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
      path : '/advert/create',
      component : AdvertCreate,
      meta : {
         requiresAuth : true,
      }
   },
   {
      path : '/advert/:id',
      name : 'advert',
      component : SingleAdvert,
      props: true,
      meta : {
         requiresAuth : false,
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