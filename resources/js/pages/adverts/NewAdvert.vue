<template>
  <div class="grid min-h-screen place-items-center">
      <v-tour name="advertTour" :steps="steps"></v-tour>
      <div class="w-11/12 p-12 shadow-lg hover:shadow-2xl dark:bg-gray-700 bg-gray-100 sm:w-8/12 md:w-1/2 mb-2 lg:w-5/12">
         <h1 class="text-xl font-semibold dark:text-gray-200 ">To create a new advert, <span class="font-normal">please fill in your information.</span></h1>
         
         <form @submit.prevent='createNewAdvert' enctype="multipart/form-data" class="mt-6">

            <label  
               data-v-step="title"
               for="title" 
               class="block mt-2 text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Title</label>
            <input required v-model="form.title" id="title" type="text" name="title" placeholder="Your advert's title" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"/>
            <label for="description" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Description</label>
            <textarea 
               required 
               data-v-step="description"
               v-model="form.description"
               id="description" type="text"
               name="description" placeholder="Describe what you're selling" 
               class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
            
            <div class="block md:flex justify-between gap-3">
               <span class="w-1/2 mb-2">
                  <label 
                     data-v-step="county"
                     for="county"
                     class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">County</label>
                  <input required v-model="form.county" id="county" type="text" name="county" placeholder="Your County" class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
               </span>
               <span class="w-1/2 mb-2">
                  <label 
                     data-v-step="city"
                     for="city" 
                     class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">City</label>
               <input required v-model="form.city" id="city" type="text" name="city" placeholder="Your City" class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
               </span>

            </div>

             <div class="block md:flex justify-between gap-3 mb-2">
               <span class="w-1/2 mb-2">
                  <label 
                     data-v-step="price"
                     for="price" 
                     class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Price (Ft)</label>
                  <input required v-model="form.price" id="price" type="number" name="price" placeholder="Price..." class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"  />
               </span>
               <span class="w-1/2 mb-2">
                  <label 
                     data-v-step="console_type"
                     for="console_type" 
                     class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Console type</label>
                  <select required v-model="form.console_type" name="console_type" id="console_type" class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
                     <option disabled selected value="">Console type</option>
                     <option selected value="xbox">Xbox</option>
                     <option value="playstation">Playstation</option>
                     <option value="nintendo">Nintendo</option>
                  </select>
               </span>
            </div>

            <div class="block md:flex justify-between gap-3 mb-2">
               <span class="w-1/2 mb-2">
                  <label 
                  data-v-step="shipping"
                  for="shipping" 
                  class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Shipping?</label>
                     <select required v-model="form.shipping" name="console_type" id="console_type" class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
                        <option disabled selected value="">Will ship it?</option>
                        <option selected value="1">Yes</option>
                        <option value="2">No</option>
                     </select>               
               </span>

               <span class="w-1/2 mb-2">
                  <label 
                     data-v-step="condition"
                     for="condition" 
                     class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Condition</label>
                  <select 
                     required v-model="form.condition" 
                     name="condition" 
                     id="condition" 
                     class="mb-2 block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
                     <option disabled selected value="">Select the condition</option>
                     <option selected value="used">Used</option>
                     <option value="new">New</option>
                     <option value="damaged">Damaged</option>
                  </select>
               </span>
            </div>

            <div class="block md:flex justify-between gap-3 mb-2">
               <span class="w-full mb-2">
                  <label 
                     data-v-step="image"
                     for="image" 
                     class="mb-2 block text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase">Please, upload a thumbnail photo</label>
                     <input accept="image/*" v-on:change="onFileChange" name="image" type="file" id="image" >            
               </span>
            </div>
           
            <button type="submit" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span class="inline-block mr-2">Create it ! 🤘🏼
                    <i v-show="isLoading" class="fas fa-spinner fa-spin"></i>
                </span>
                <svg v-show="!isLoading" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
           
            <p @click="startAdvertTour" class="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer">Need help?</p>
         </form>
      </div>
      <v-tour name="myTour" :steps="steps"></v-tour>
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
            image : null,
            advert_type : 'sell',
            console_type : '', // Type of console (xbox,ps,nintendo)
            shipping : '', // Can be shipped to customer
            condition : '', // Meaning the state of the game (used/new)
         },
         steps: 
         [
            {
               target: '[data-v-step="title"]', 
               content: 'Add a title for your advert'
            },
            {
               target: '[data-v-step="description"]',
               content: 'Tell us, what you are selling'
            },
            {
               target: '[data-v-step="county"]',
               content: 'Tell us your county, so we can filter your advert'
            },
            {
               target: '[data-v-step="city"]',
               content: 'Tell us your city, so we can filter your advert'
            },
            {
               target: '[data-v-step="price"]',
               content: 'Tell us your price, so we will know it!'
            },
            {
               target: '[data-v-step="console_type"]',
               content: 'Tell us the console type, so we can filter it too!'
            },
            {
               target: '[data-v-step="condition"]',
               content: 'Condition of the game you are selling'
            },
            {
               target: '[data-v-step="image"]',
               content: 'Upload an image so we can see it!'
            },
            {
               target: '[data-v-step="shipping"]',
               content: 'Are you planning to ship it?'
            },
         ]
      }
   },
   computed: {
        currentUser() {
            return this.$store.getters.currentUser;
      },
   },
   methods: {
      startAdvertTour(){
         this.$tours['myTour'].start();
      },
      onFileChange(e){
         this.form.image = e.target.files[0];
      },
      createNewAdvert(){
         var formData = new FormData();
         formData.append('user_id', this.form.user_id);
         formData.append('title', this.form.title);
         formData.append('description', this.form.description);
         formData.append('city', this.form.city);
         formData.append('price', this.form.price);
         formData.append('county', this.form.county);
         formData.append('image', this.form.image);
         formData.append('advert_type', this.form.advert_type);
         formData.append('console_type', this.form.console_type);
         formData.append('shipping', this.form.shipping);
         formData.append('condition', this.form.condition);

         this.isLoading = true;
         axios.post('/api/advert/store', formData, 
         {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         })
         .then(() => {
            this.$router.push({ path: '/adverts' })
            setTimeout(() => {
                  this.$store.dispatch('alert/success', 'Advert successful');
                  this.isLoading = false;
            },1000)
         })
            .catch((response) =>{
               console.log(response.message);
               setTimeout(() => {
                  this.$store.dispatch('alert/error', err);
            })
         })
      }
   },
   
   mounted(){
        this.form.user_id = this.currentUser.id;
         
      },
   }
</script>

<style>

</style>