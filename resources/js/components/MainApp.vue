<template>
    <div id="main" class=" border-t-4 border-gray-800">
    <Header/>
    
        <transition name='fade' mode="out-in" >
            <div v-if="alert.message" class="notifier inline-flex items-center bg-white leading-none text-gray-600 rounded-full p-2 shadow text-teal text-sm">
                <span class="inline-flex bg-gray-600 text-white rounded-full h-6 px-3 justify-center items-center"></span>
                <span class="inline-flex px-2">{{alert.message}}</span>
            </div>        
        </transition>

        <transition name='fade' mode="out-in" >
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from './Header'

    export default {
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
        updated() {
                setTimeout(() => {
                    this.clearAlert();
                }, 5000);
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
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    width: 250px;
    position: absolute;
    left: 50%;
    top: 90px;
    margin-left: -125px;
}
.v-step {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
    max-width: 24rem !important;
    background-color:rgba(107, 114, 128, var(--tw-bg-opacity));
    border-radius: 0.5rem !important;
    color: #faf5ff !important;
    font-size: 1.125rem !important;
    -webkit-filter: drop-shadow(0px 20px 25px rgba(0,0,0,0.1)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04)) !important;
    filter: drop-shadow(0px 20px 25px rgba(0,0,0,0.1)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04)) !important;
}
.v-step__arrow {
    border-color: rgba(107, 114, 128, var(--tw-bg-opacity));
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
}
.v-step__button{
    border-radius: 0.5rem!important;
    background-color: rgba(107, 114, 128, var(--tw-bg-opacity))!important;
    background: rgba(107, 114, 128, var(--tw-bg-opacity))!important;
    color: rgba(255, 255, 255, var(--tw-text-opacity))!important;
}
</style>
