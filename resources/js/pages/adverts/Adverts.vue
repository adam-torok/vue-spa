<template>
    <div class="con dark:bg-gray-900 flex h-full content-center justify-center align-center">
        <Loader v-if="showLoader"/>
        <div class="hirdetesek">
            <Advert/>
            <Advert/>
            <Advert/>
            <Advert/>
            <Advert/>
        </div>
        <Navigation/>
    </div>
</template>

<script>
import Loader from './Loader'
import Navigation from './Navigation'
import Advert from './Advert'

export default {
    components:{
        Loader,
        Navigation,
        Advert
    },
    data(){
        return{
            showLoader : true,
            adverts : []
        }
    },
    mounted(){
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
    }
}
</script>

<style>
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
}
@media (min-width: 1024px){
    .hirdetesek{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>