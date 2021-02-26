import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        adverts: []
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        adverts(state) {
            return state.adverts;
        }
    },
    mutations: {
        setInformations(state, payload){
            const { bio, public_email, city, web } = payload;
            state.currentUser.bio = bio;
            state.currentUser.public_email = public_email;
            state.currentUser.city = city;
            state.currentUser.web = web;
        },
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        updateAdverts(state, payload) {
            state.customers = payload;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        getAdverts(context) {
            axios.get('/api/adverts')
            .then((response) => {
                context.commit('updateAdverts', response.data.adverst);
            })
        }
    }
};
