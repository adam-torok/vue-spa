<template>
    <div class="bg-white dark:bg-gray-800">
        <div>
            <div 
                class="w-full bg-cover bg-no-repeat bg-center"
                style="height: 200px; background-image: url(https://c4.wallpaperflare.com/wallpaper/300/544/973/discord-wallpaper-preview.jpg);">
                    <img class="opacity-0 w-full h-full"
                    :src="'storage/'+currentUser.profile_cover"
                    alt="Profile cover">
            </div>
            <div class="p-4">
                <div class="relative flex w-full">
                    <div class="flex flex-1">
                        <div style="margin-top: -6rem;">
                            <div style="height:7rem; width:7rem;" class="md rounded-full relative avatar">
                                <img style="height:7rem; width:7rem;"
                                class="md rounded-full relative bg-cover object-cover border-4 border-gray-900"
                                :src="'storage/'+currentUser.profile_picture" 
                                alt="Profile picture">
                                <div class="absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col text-right mr-2">
                        <button class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <router-link to="advert/create" class="inline-block">New Advert
                                <i class="fas fa-plus"></i>
                            </router-link>
                        </button>
                    </div>
                    <div class="flex flex-col text-right">
                        <router-link to="profile/edit" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            <span class="inline-block">Edit Profile
                                <i class="fas fa-user-edit"></i>
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="space-y-1 justify-center w-full mt-3 ml-3">
                    <div>
                        <h2 class="text-xl dark:text-gray-200 leading-6 font-bold text-gray">{{currentUser.full_name}}</h2>
                        <p class="text-sm leading-5 font-medium text-gray-600">@{{currentUser.username}}</p>
                    </div>
                    <div class="mt-3">
                        <div class="text-gray-600 dark:text-gray-400 flex">
                            <span v-if="currentUser.bio" class="text-gray leading-tight mb-2"><i class="fas fa-feather-alt"></i> {{currentUser.bio}}</span>
                        </div>
                        <div class="text-gray-600 dark:text-gray-400 flex">
                            <span v-if="currentUser.city" class="text-gray leading-tight mb-2"><i class="fas fa-city"></i> {{currentUser.city}}</span>
                        </div>
                        <div class="text-gray-600 dark:text-gray-400 flex">
                            <span v-if="currentUser.public_email" class="flex items-center mr-2"><i class="fas fa-at"></i><a class="leading-5 ml-1" href="mailto:">{{currentUser.public_email}}</a></span>                   
                        </div>
                    <div class="text-gray-600 dark:text-gray-400 flex">
                        <span class="flex mr-2" v-if="currentUser.webpage"><i class="fas fa-columns"></i>
                            <a href="" class="leading-5 ml-1 text-blue-400">{{currentUser.webpage}}</a>
                        </span>
                        <span class="flex mr-2"><span class="leading-5 ml-1"><i class="far fa-calendar-alt"></i> Joined {{currentUser.created_at}}</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
import {mapState} from 'vuex'
import Advert from '../adverts/Advert'
export default {
    components:{
        Advert
    },
    computed: {
        ...mapState({
            adverts: state => state.advert.adverts,
        }),
        currentUser() {
            return this.$store.getters.currentUser;
        }
    }
}
</script>