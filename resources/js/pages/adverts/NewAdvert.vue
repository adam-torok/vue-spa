<template>
  <div class="grid min-h-screen place-items-center">
      <div class="w-11/12 p-12 dark:bg-gray-800 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
         <h1 class="text-xl font-semibold dark:text-gray-200 ">To create a new advert, <span class="font-normal">please fill in your information.</span></h1>
         <form @submit.prevent='createNewAdvert' class="mt-6">
            <label for="title" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Title</label>
            <input required v-model="form.title" id="title" type="text" name="title" placeholder="Your advert's title" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
            <label for="description" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Description</label>
            <textarea required v-model="form.description" id="description" type="text" name="description" placeholder="Describe what you're selling" class="block w-full mb-2 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            
            <div class="flex justify-between gap-3">

               <span class="w-1/2 mb-2">
                  <label for="county" class="block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">County</label>
                  <input required v-model="form.county" id="county" type="text" name="county" placeholder="Your County" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
               </span>
               <span class="w-1/2">
                  <label for="city" class="block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">City</label>
               <input required v-model="form.city" id="city" type="text" name="city" placeholder="Your City" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
               </span>

            </div>

             <div class="flex justify-between gap-3 mb-2">

               <span class="w-1/2">
                  <label for="price" class="block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Price (Ft)</label>
                  <input required v-model="form.price" id="price" type="number" name="price" placeholder="Price..." class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
               </span>
               <span class="w-1/2">
                  <label for="console_type" class="block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Console type</label>
                  <select required v-model="form.console_type" name="console_type" id="console_type" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
                     <option disabled selected value="">Console type</option>
                     <option selected value="xbox">Xbox</option>
                     <option value="playstation">Playstation</option>
                     <option value="nintendo">Nintendo</option>
                  </select>
               </span>

            </div>

            <div class="flex justify-between gap-3 mb-2">
               <span class="w-1/2">
                  <label for="shipping" class="block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Shipping?</label>
                     <select required v-model="form.shipping" name="console_type" id="console_type" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
                        <option disabled selected value="">Will ship it?</option>
                        <option selected value="true">Yes</option>
                        <option value="false">No</option>
                     </select>               
               </span>
               <span class="w-1/2">
                  <label for="condition" class="block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Condition</label>
                  <select  required v-model="form.condition" name="condition" id="condition" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
                     <option disabled selected value="">Select the condition</option>
                     <option selected value="used">Used</option>
                     <option value="new">New</option>
                     <option value="damaged">Damaged</option>
                  </select>
               </span>
            </div>

           
            <button  type="submit" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span class="inline-block mr-2">Create it ! 🤘🏼
                    <i v-show="isLoading" class="fas fa-spinner fa-spin"></i>
                </span>
                <svg v-show="!isLoading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
           
            <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Need help?</p>
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
            price : '',
            county : '', 
            advert_type : 'sell',
            console_type : '', // Type of console (xbox,ps,nintendo)
            shipping : '', // Can be shipped to customer
            condition : '', // Meaning the state of the game (used/new)
            image : '' // Will be the URL of the game
         }
      }
   },
   computed: {
        currentUser() {
            return this.$store.getters.currentUser;
      },
   },
   methods: {
      createNewAdvert(){
         this.isLoading = true;
         setTimeout(() => {
            this.isLoading = false;
            //alert('advert created...');
            console.log(this.form);
         }, 3000);
      }
   },
   mounted(){
        this.form.user_id = this.currentUser.id;
    }
}
</script>

<style>

</style>