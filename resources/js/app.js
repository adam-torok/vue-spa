require('./bootstrap');
require('vue-tour/dist/vue-tour.css')
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './store'
import Notifications from "vt-notifications";
import { routes } from './routes';
import MainApp from './components/MainApp'
import {initialize} from './helpers/general'
import VueTour from 'vue-tour'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueTour)
Vue.use(Notifications);

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
    routes,
    mode: 'history'
})

initialize(store,router);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
