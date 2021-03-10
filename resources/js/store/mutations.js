export const SET_USER_INFORMATIONS = (state, user) => {
   const { bio, public_email, city, web } = user;
   state.currentUser.bio = bio;
   state.currentUser.public_email = public_email;
   state.currentUser.city = city;
   state.currentUser.web = web;
}

export const LOGIN = (state) => {
   state.loading = true;
   state.authError = null;
}

export const LOGIN_SUCCESS = (state,payload) => {
   state.authError = null;
   state.isLoggedIn = true;
   state.loading = false;
   state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
   localStorage.setItem("user", JSON.stringify(state.currentUser));
}

export const LOGIN_FAILED = (state,payload) => {
   state.loading = false;
   state.authError = payload.error;
}

export const LOGOUT = (state) =>{
   localStorage.removeItem("user");
   state.isLoggedIn = false;
   state.currentUser = null;
}