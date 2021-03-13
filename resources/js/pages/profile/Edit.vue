<template>
<div class="bg-white dark:bg-gray-800">
<div>
    <div class="w-full bg-cover bg-no-repeat bg-center" style="height: 200px; background-image: url(https://c4.wallpaperflare.com/wallpaper/300/544/973/discord-wallpaper-preview.jpg);">
        <img class="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="">
    </div>
    <div class="p-4">

        <div class="relative flex w-full">
            <div class="flex flex-1 items-center justify-center	">
                <div>
                    <div style="height:9rem; width:9rem;" class="md rounded-full relative avatar">
                        <img style="height:9rem; width:9rem;" class="md rounded-full relative bg-cover object-cover border-4 border-gray-900"
                        :src="'../storage/'+currentUser.profile_picture"
                        alt="Profile picture">
                        <div class="absolute"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-1 justify-center w-full mt-3 ml-3">
            <div>
               <h2 class="text-xl dark:text-white leading-6 font-bold text-gray">{{currentUser.full_name}}</h2>
               <p class="text-sm dark:text-white leading-5 font-medium text-gray-600">@{{currentUser.username}}</p>
            </div>
        </div>

        </div>
    </div>
    <div>
  <div class="p-4 mb-5 md:grid max-w-screen-lg md:grid-cols-1 md:gap-6 m-auto">
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
        <div class="shadow-lg hover:shadow-2xl sm:rounded-md sm:overflow-hidden">
          <div class="rounded-lg px-4 py-5 dark:bg-gray-700 space-y-6 sm:p-6">
            <div class="grid">
              <div class="col-span-3 sm:col-span-2">
                <label for="website" class="block text-sm font-medium dark:text-white text-gray-700">
                  Website
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center rounded-l-md border p-3 mb-2 mt-2 border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input 
                    v-model="form.web"
                    type="text"
                    name="website"
                    id="website"
                    class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
                    placeholder="www.example.com">
                </div>
              </div>
            </div>

            <div class="grid">
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
                    class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
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
                    class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                    class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" placeholder="Introduce yourself!"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div>
              <label for="profile_picture" class="block text-sm font-medium dark:text-white text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                     <input accept="image/*" v-on:change="onFileChange" name="profile_picture" type="file" id="profile_picture" >            
              </div>
            </div>
          </div>
         <div class="flex flex-col">
            <button @click.prevent="saveDetails" class="m-auto mt-5 mb-5 transition w-1/2 duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
               <span class="inline-block"> 
                  Save my profile 🤘🏼
                  <i class="fas fa-save"></i>
               </span>
            </button>
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
                skype : '',
                profile_picture : null
            }
        }
    },
    methods:{
      onFileChange(e){
         this.form.profile_picture = e.target.files[0];
      },
        saveDetails(){
            var formData = new FormData();
            formData.append('id', this.form.id);
            formData.append('bio', this.form.bio);
            formData.append('public_email', this.form.public_email);
            formData.append('city', this.form.city);
            formData.append('web', this.form.web);
            formData.append('twitter', this.form.twitter);
            formData.append('skype', this.form.skype);
            formData.append('profile_picture', this.form.profile_picture);
            axios.post('/api/profile/update', formData,{
              headers : {
                'Content-Type': 'multipart/form-data'
              }
            })
                .then(response => {
                  console.log(response.data);
                    this.$store.commit('SET_USER_INFORMATIONS', {
                        bio : this.form.bio,
                        public_email : this.form.public_email,
                        city : this.form.city,
                        webpage : this.form.web,
                        profile_cover: response.data.profile_cover,
                        profile_picture: response.data.profile_picture,
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