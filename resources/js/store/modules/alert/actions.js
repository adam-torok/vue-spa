export const success = ({ commit }, message) => {
   commit('ALERT_SUCCESS', message);
}

export const error = ({ commit }, message) => {
   commit('ALERT_ERROR', message);
}

export const clear = ({ commit }) => {
   commit('ALERT_CLEAR');
}