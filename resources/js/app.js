require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import storeData from './store'
import {routes} from './routes';
import MainApp from './components/MainApp'
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeData);

const router = new VueRouter({
    routes,
    mode : 'history'
})

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
