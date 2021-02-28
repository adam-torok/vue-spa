<template>
<div class="bg-white dark:bg-gray-800">
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
                <button @click="saveDetails" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block"> 
                        Save
                        <i class="fas fa-save"></i>
                    </span>
                </button>
            </div>
        </div>

        <!-- Profile info -->
        <div class="space-y-1 justify-center w-full mt-3 ml-3">
            <!-- User basic-->
            <div>
                <h2 class="text-xl dark:text-white leading-6 font-bold text-gray">{{currentUser.full_name}}</h2>
                <p class="text-sm dark:text-white leading-5 font-medium text-gray-600">@{{currentUser.username}}</p>
            </div>
          
        </div>
        </div>
    </div>
    <div>
  <div class="p-4 md:grid max-w-screen-lg md:grid-cols-1 md:gap-6 m-auto">
    <div class="md:col-span-1 text-center">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 dark:text-white text-gray-900">Profile</h3>
        <p class="mt-1 text-sm dark:text-gray-200 text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form class="bg-white dark:bg-gray-700">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="rounded-lg px-4 py-5 dark:bg-gray-700 space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="website" class="block text-sm font-medium dark:text-white text-gray-700">
                  Website
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input 
                    v-model="form.web"
                    type="text"
                    name="website"
                    id="website"
                    class=" p-2  flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" 
                    placeholder="www.example.com">
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="public_email" class="block text-sm font-medium dark:text-white text-gray-700">
                  Public Email
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input 
                    v-model="form.public_email"
                    type="text"
                    name="public_email"
                    id="public_email"
                    class=" p-2  flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" 
                    placeholder="Your public email">
                </div>
              </div>
            </div>

            <div>
              <label for="city" class="block text-sm font-medium dark:text-white text-gray-700">
                City
              </label>
              <div class="mt-1">
                <input 
                    v-model="form.city"
                    id="city"
                    name="city"
                    class="shadow-sm  p-2  mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Your city, where you live">
              </div>
            </div>


            <div>
              <label for="bio" class="block text-sm font-medium dark:text-white text-gray-700">
                About
              </label>
              <div class="mt-1">
                <textarea 
                    v-model="form.bio"
                    id="bio"
                    name="bio"
                    rows="3"
                    class="shadow-sm p-2  mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Introduce yourself!"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium dark:text-white text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                  Change
                </button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium dark:text-white text-gray-700">
                Cover photo
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
    <hr class="border-gray-800">
</div>
</template>

<script>
export default {
    data(){
        return{
            form : {
                id : '',
                bio : '',
                public_email : '',
                city : '',
                web : '',
                twitter : '',
                skype : ''
            }
        }
    },
    methods:{
        saveDetails(){
            axios.post('/api/profile/update', this.form)
                .then(() => {
                    this.$store.commit('setInformations', {
                        bio : this.form.bio,
                        public_email : this.form.public_email,
                        city : this.form.city,
                        webpage : this.form.web
                    })
                    this.$store.dispatch('alert/success', 'Sucessful update');
                    this.$router.push({path: '/profile'});
                })
                .catch((err) =>{
                    setTimeout(() => {
                        this.$store.dispatch('alert/success', err);
                    })
                })
            }
        },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        },
    },
    mounted(){
        this.form.id = this.currentUser.id;
        this.form.web = this.currentUser.webpage;
        this.form.bio = this.currentUser.bio;
        this.form.city = this.currentUser.city;
        this.form.public_email = this.currentUser.public_email;
    }
}
</script>

<style>

</style>