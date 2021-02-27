<template>
  <div class="modal h-screen overflow-hidden bg-white bg-opacity-50 dark:bg-opacity-50 dark:bg-black top-0 w-full absolute flex items-center justify-center">
        <div class="bg-white  rounded shadow p-8 m-4 max-w-xs max-h-full text-center">
            <div class="mb-4">
                <h1>Are you sure to logout?</h1>
            </div>
            <div class="flex items-end justify-end gap-4">
               <button @click="logout" class="mr-2 transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block"> 
                        Yes
                    </span>
                </button>

                 <button @click="hideModal" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full p-2 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block"> 
                        No
                    </span>
                </button>
            </div>
      </div>
   </div>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$store.commit('logout');
            this.$router.push("/login");
            this.$emit('hideModal');
        },
        hideModal(){
            this.$emit('hideModal');
        }
    }
}
</script>

<style>
   .modal{
        backdrop-filter: blur(10px);
   }
</style>