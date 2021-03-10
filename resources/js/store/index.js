import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

// Simple setters getters etc are considered the USER!
import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";

import advert from "./modules/advert";
import alert from "./modules/alert";

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
        advert,
        alert
    }
});