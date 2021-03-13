<template>
  <!-- Card Component -->
  <div>
  <div
    class="transition-all duration-150 flex w-full px-4 py-3 h-full"
  >
    <div
      class="flex flex-col items-stretch min-h-full pb-4 mb-3 transition-all duration-150 dark:bg-gray-800 bg-white rounded-lg shadow-lg hover:shadow-2xl"
    >
      <div class="md:flex-shrink-0">
        <router-link :to="{name: 'advert', params: {id: advert.id}}">
         <img
          :src="'storage/'+advert.image_name"
          class="object-contain w-full rounded-lg rounded-b-none md:h-56"
        />
        </router-link>
       
      </div>
      <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
    <router-link :to="{name: 'advert', params: {id: advert.id}}">
        <span class="text-xs font-medium text-blue-600 uppercase dark:text-white">
          {{advert.console_type}}
        </span>
    </router-link>
        <div class="flex flex-row items-center">
      
        </div>
      </div>
      <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
        <router-link :to="{name: 'advert', params: {id: advert.id}}">
            <h2 class="text-2xl font-bold tracking-normal dark:text-white text-gray-800">
                {{advert.title}}
            </h2>
        </router-link>
      </div>
      <p
        class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify dark:text-gray-400 text-gray-700"
      >
        {{advert.description}}
      </p>
      <hr class="border-gray-300 dark:border-gray-500" />
      <section class="px-4 py-2 mt-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center flex-1">
            <img
              class="object-cover h-10 w-10 rounded-full"
              src="https://scontent.fbud4-1.fna.fbcdn.net/v/t1.0-9/27655444_1553266691394108_1864222071249340573_n.jpg?_nc_cat=107&ccb=3&_nc_sid=09cbfe&_nc_ohc=iHcD00nUjMAAX9LQY-2&_nc_ht=scontent.fbud4-1.fna&oh=7d909a6cb892e02224cea0f545c65ce0&oe=605CE599"
              alt="Avatar"
            />
            <div class="flex flex-col mx-2">
            <router-link exact to="profile/1" class="font-semibold dark:text-gray-400 text-gray-700 hover:underline">
                John Doe
            </router-link>
              <span class="mx-1 text-xs dark:text-gray-400 text-gray-600">{{advert.created_at}}</span>
            </div>
          </div>
          <div class="flex flex-col items-end	">
              <span v-if="advert.shipping === 1" class="inline-block dark:text-white ">Can be shipped <i class="fas fa-truck"></i></span>
              <span v-else class="inline-block dark:text-white ">Without shipping <i class="fas fa-times-circle"></i></span>
              <span class="inline-block dark:text-white "><b>{{advert.price}} Ft</b></span>
          </div>
        </div>
      </section>
    </div>
  </div>
  
  </div>
</template>

<script>
export default {
  props:{
    advert : Object
  },
};
</script>

<style>

</style>