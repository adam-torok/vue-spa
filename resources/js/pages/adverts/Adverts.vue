<template>
    <div>
        <SearchBar/>
        <div class="con dark:bg-gray-900 flex h-full content-center justify-center align-center">
            <Loader v-if="showLoader"/>
            <button @click="changeView" class="fixed gridder left-4 bg-opacity-50 rounded-full bg-gray-800 p-4 text-white"><i class="fas fa-th"></i></button>
            <transition name='fade' mode="out-in" >
                <div class="hirdetesek" :class="{onegrid: oneGrid}">
                    <Advert :advert="advert" v-for="advert in adverts" :key="advert.id"/>
                </div>
            </transition>
            <Navigation/>
        </div>
    </div> 
</template>

<script>
import Loader from './Loader'
import SearchBar from '../../components/SearchBar'
import Navigation from './Navigation'
import Advert from './Advert'
import { mapState, mapGetters } from 'vuex';

export default {
    components:{
        Loader,
        Navigation,
        Advert,
        SearchBar
    },
    data(){
        return{
            showLoader : true,
            oneGrid : false,
        }
    },
    methods : {
        changeView(){
            this.oneGrid = !this.oneGrid;
            this.$store.state.advert.adverts.filtered = this.isShipping;
            console.log(this.$store.state.advert.adverts.filtered );
            this.$store.commit('advert/SET_ADVERTS', this.isShipping);
        },
        fetchAdvert(){
            return axios.get('api/advert/index').then(response => {
                this.$store.commit('advert/SET_ADVERTS', response.data);
            });
        }
    },
    computed :{
        ...mapGetters({
            isShipping: 'advert/isShipping'
            // map `this.doneCount` to `this.$store.getters.doneTodosCount`
        }),
        ...mapState({
            adverts: state => state.advert.adverts,
        }),
    },
    mounted(){
        this.fetchAdvert().then(() => {
            this.showLoader = false;
        });
    }
}
</script>

<style>
.onegrid{
    grid-template-columns: 1fr!important;
}
.gridder{
    backdrop-filter: blur(10px);
}
.bottom-nav{
    transition: none!important;
}
.con{
    transition: none!important;
    margin-bottom: 45px;
}
.hirdetesek{
    display: grid;
    grid-template-columns: 1fr;
}

@media (min-width: 768px){
    .hirdetesek{
        grid-template-columns: 1fr 1fr;
    }
    .onegrid{
        max-width: 800px;
        margin: 0 50px;
    }
}
@media (min-width: 1024px){
    .hirdetesek{
        grid-template-columns: 1fr 1fr 1fr;
    }
     .onegrid{
        max-width: 800px;
        margin: 0 50px;
    }
}
</style>