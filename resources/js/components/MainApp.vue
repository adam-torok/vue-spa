<template>
    <div id="main">
    <Header/>
        <div v-if="alert.message" class="notifier inline-flex items-center bg-white leading-none text-gray-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex bg-gray-600 text-white rounded-full h-6 px-3 justify-center items-center"></span>
            <span class="inline-flex px-2">{{alert.message}}</span>
        </div>        
        <transition name='fade' mode="out-in" >
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from './Header'

    export default {
        data(){
            return {

            }
        },
        mounted(){

        },
        components:{
            Header,
        },
        computed: {
            ...mapState({
                alert: state => state.alert
            })
        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear' 
            })
        },
        watch: {
            $routes(to, from){
                this.clearAlert();
            }
        } 
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css';
body{
    -webkit-user-select:none;-moz-user-select:-moz-none;
    -ms-user-select:none;user-select:none
}
.fade-enter, .fade-leave-to{
    opacity: 0;
    transform: translateX(-2em);
}
.fade-enter-active, .fade-leave-active{
    transition: all 0.3s ease;
}
input,
textarea {
    font-size: 16px;
}
#main{
    background: rgb(215, 215, 215);
    min-height: 100vh;
}
.notifier{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin-top: 15px;
}
</style>
