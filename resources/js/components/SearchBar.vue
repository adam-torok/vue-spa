<template>
   <div class="mt-2 mb-2 m-auto flex justify-center items-center relative text-gray-600">
      <input @keydown="search" v-model="input" type="search" name="search" placeholder="Search for game titles" class="w-3/4 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
   data(){
      return{
         input : '',
      }
   },
   methods:{
      search(){
         this.$store.state.advert.adverts =  this.filteredClients;
      }
   },

   computed :{
         filteredClients() {
            const search = this.input.toLowerCase().trim();
            if (!search) return this.$store.state.adverts;
         return this.$store.state.advert.adverts.filter(c => c.title.toLowerCase().indexOf(search) > -1);
      }
   }
}
</script>