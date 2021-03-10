export const fetchAdverts = ({ commit }) => {
   return axios.get('api/advert/index').then(response => {
      commit('SET_ADVERTS', response.data);
   });
}

export const fetchAdvert = ({ commit }, advertId) => {
   return axios.get(`/api/advert/${advertId}`).then(response => {
      commit('SET_ADVERT', response.data);
   })
}