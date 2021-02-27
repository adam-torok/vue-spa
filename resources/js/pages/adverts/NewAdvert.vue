<template>
  <div class="grid min-h-screen place-items-center">
      <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
         <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">please fill in your information to continue</span></h1>
         <form @submit.prevent='createNewAdvert' class="mt-6">
            <div class="flex justify-between gap-3">
            <span class="w-1/2">
               <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
               <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            </span>
            <span class="w-1/2">
               <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
            <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            </span>
            </div>
            <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
            <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            <button  type="submit" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span class="inline-block mr-2">Create it ! 🤘🏼
                    <i v-show="isLoading" class="fas fa-spinner fa-spin"></i>
                </span>
                <svg v-show="!isLoading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
         </form>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return{
         isLoading : false,
         form : {
            user_id : '',
            title : '',
            description : '',
            city : '',
            county : '', 
            console : '', // Type of console (xbox,ps,nintendo)
            shipping : '', // Can be shipped to customer
            state : '', // Meaning the state of the game (used/new)
            image : '' // Will be the URL of the game
         }
      }
   },
   methods: {
      createNewAdvert(){
         this.isLoading = true;
         setTimeout(() => {
            this.isLoading = false;
            alert('advert created...');
         }, 3000);
      }
   }
}
</script>

<style>

</style>