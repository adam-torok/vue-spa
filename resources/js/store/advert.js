    
const state = {
    adverts: [],
};

    const getters =  {
        getAdvertById: state => id => {
            return state.adverts.find(advert => advert.id === id);
        },
    };

    const actions = {
        fetchAdverts({ commit }) {
            console.log('hi');
            return axios.get('api/advert/index')
                .then(response => {
                    commit('setAdverts', response.data);
                });
        },
    };

    const mutations =  {
        setAdverts(state, adverts) {
            state.adverts = adverts;
        },
    };
    
export const advert = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};