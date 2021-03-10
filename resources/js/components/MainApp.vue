<template>
    <div id="main" class="dark:bg-gray-900 bg-white border-t-4 border-gray-800">
    <Header @showLogoutModal="showLogoutModal"/>
    
        <transition name='fade' mode="out-in" >
            <div v-if="alert.message" class="notifier inline-flex items-center leading-none dark:text-white text-gray-600 rounded-full p-2 shadow text-teal text-sm">
                <span class="inline-flex dark:text-white bg-gray-600 text-white rounded-full h-6 px-3 justify-center items-center"></span>
                <span class="inline-flex dark:text-white px-2">{{alert.message}}</span>
            </div>        
        </transition>

        <transition name='fade' mode="out-in" >
            <router-view></router-view>
        </transition>
 
    <transition name='fade' mode="out-in" >
        <LogoutModal @hideModal="hideModal" v-if="showLogout"/>
    </transition>
    
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Header from './Header'
import LogoutModal from './LogoutModal'

    export default {
        components:{
            Header,
            LogoutModal
        },
        data(){
            return{
                showLogout : false
            }
        },
        computed: {
            ...mapState({
                alert: state => state.alert
            })
        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear' 
            }),
            showLogoutModal(){
                this.showLogout = true;
            },
            hideModal(){
                this.showLogout = false;
            }
        },
        mounted(){
            tippy('[data-tippy-content]');
            if (localStorage.theme === 'dark' ||
                (!'theme' in localStorage &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.querySelector('html').classList.add('dark')
            } else if (localStorage.theme === 'dark') {
                document.querySelector('html').classList.add('dark')
            }
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
