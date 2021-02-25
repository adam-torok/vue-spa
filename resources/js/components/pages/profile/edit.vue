<template>
  <div class="bg-white">
<!-- User card-->
<div>
    <div class="w-full bg-cover bg-no-repeat bg-center" style="height: 200px; background-image: url(https://c4.wallpaperflare.com/wallpaper/300/544/973/discord-wallpaper-preview.jpg);">
        <img class="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="">
    </div>
    <div class="p-4">
        <div class="relative flex w-full">
            <!-- Avatar -->
            <div class="flex flex-1 items-center justify-center	">
                <div style="margin-left: 6rem;margin-top: -6rem;">
                    <div style="height:9rem; width:9rem;" class="md rounded-full relative avatar">
                        <img style="height:9rem; width:9rem;" class="md rounded-full relative bg-cover object-cover border-4 border-gray-900" :src="'../img/'+currentUser.profile_picture+'.jpg'" alt="Profile picture">
                        <div class="absolute"></div>
                    </div>
                </div>
            </div>
            <!-- Follow Button -->
            <div class="flex flex-col text-right">
                <button class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block">Save 
                        <i class="fas fa-save"></i>
                    </span>
                </button>
            </div>
        </div>

        <!-- Profile info -->
        <div class="space-y-1 justify-center w-full mt-3 ml-3">
            <!-- User basic-->
            <div>
                <h2 class="text-xl leading-6 font-bold text-gray">{{currentUser.full_name}}</h2>
                <p class="text-sm leading-5 font-medium text-gray-600">@{{currentUser.username}}</p>
            </div>
            <!-- Description and others -->
            <div class="mt-3">

                <div class="text-gray-600 flex">
                    <label for="bio" class="font-bold mr-2"><i class="fas fa-feather-alt"></i> Bio:</label>
                    <input id='bio' type="text" placeholder="Your public email" value="Software Engineer / Designer, just for fun." class="text-gray leading-tight">
                </div>

                <div class="text-gray-600 flex">
                    <label for="public_email" class="font-bold mr-2"><i class="fas fa-at"></i> Public email:</label>
                    <input id='public_email' placeholder="Your public email" type="email" value="woltery99@outlook.hu" class="text-gray leading-tight">      
                </div>

                <div class="text-gray-600 flex">
                    <label for="city" class="font-bold mr-2"><i class="fas fa-city"></i> City:</label>
                    <input id='city' placeholder="Your city" type="text" value="" class="text-gray leading-tight">      
                </div>

                <div class="text-gray-600 flex">
                    <label for="web" class="font-bold mr-2"><i class="fas fa-columns"></i> Web:</label>
                    <input id='web' placeholder="Your webpage" type="text" value="" class="text-gray leading-tight">      
                </div>  
            </div>
        </div>
    </div>
    <hr class="border-gray-800">
</div>  </div>
</template>

<script>
export default {
    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        }
    }
}
</script>

<style>

</style>