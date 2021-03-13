<template>
    <div class="max-w-screen-lg	m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
         <div>
    <div class="dark:bg-gray-800 border-t-4 border-teal rounded-b px-4 py-3 shadow-md my-2">
  <div class="flex flex-col text-center">
    <i class="fa-lg  m-4 dark:text-white text-black fas fa-exclamation-circle"></i>
    <div class="mb-2">
      <p class="font-bold dark:text-white">Our privacy policy has changed</p>
      <p class="text-sm dark:text-gray-200">Make sure you know how these changes affect you.</p>
    </div>

    <div class="mb-2">
      <p class="font-bold dark:text-white">Our privacy policy has changed</p>
      <p class="text-sm dark:text-gray-200">Make sure you know how these changes affect you.</p>
    </div>

    <div class="mb-2">
      <p class="font-bold dark:text-white">Our privacy policy has changed</p>
      <p class="text-sm dark:text-gray-200">Make sure you know how these changes affect you.</p>
    </div>

    <div class="mb-2">
      <p class="font-bold dark:text-white">Our privacy policy has changed</p>
      <p class="text-sm dark:text-gray-200">Make sure you know how these changes affect you.</p>
    </div>
  </div>
</div>
</div>
    <div class="max-w-md flex md:flex-col lg:flex-col   flex-col-reverse  mx-auto" v-if="advert">
            <div class="transition-all duration-150 flex w-full px-4 py-3">
                <div class="flex flex-col items-stretch min-h-full pb-4 mb-3 transition-all duration-150 dark:bg-gray-800 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                    <div class="md:flex-shrink-0">
                        <img
                        :src="'../storage/'+advert.image_name"
                        class="object-contain w-full rounded-lg rounded-b-none md:h-56"
                        />
                    </div>
                <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-white">
                        {{advert.console_type}}
                    </span>
    <div class="flex flex-row items-center"></div></div>
        <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <a href="#">
                <h2 class="text-2xl font-bold tracking-normal dark:text-white text-gray-800">
                    {{advert.title}}
                </h2>
            </a>
        </div>      
        <p class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify dark:text-gray-400 text-gray-700">
            {{advert.description}}
        </p>
        <hr class="border-gray-300 dark:border-gray-500" />

        <div class="grid grid-cols-2 gap-4 px-4 py-2 mt-2">
            <span class="text-sm dark:text-white text-gray-700"><i class="fas fa-city mr-1"></i> {{advert.city}} - {{advert.county}}</span>
            <span class="text-sm dark:text-white text-gray-700"><i class="fas fa-gamepad mr-1"></i>{{advert.console_type}}</span>
            <span class="text-sm dark:text-white text-gray-700"><i class="fas fa-newspaper fa-lg mr-1"></i>{{advert.advert_type}}</span>
            <span class="text-sm dark:text-white text-gray-700"><i class="fas fa-tags fa-lg mr-1"></i>{{advert.price}} Ft</span>
        </div>

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
                        <router-link exact to="../profile/1" class="font-semibold dark:text-gray-400 text-gray-700 hover:underline">
                            Torok Adam
                        </router-link>
                        <span class="mx-1 text-xs dark:text-gray-400 text-gray-600">{{advert.created_at}}</span>
                    </div>
                </div>
                <button v-if="currentUser" class="dark:bg-gray-white transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white p-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block"><i class="fas fa-comments"></i> Write a message</span>
                </button>
                <router-link to="/login" v-else class="dark:bg-gray-white transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white p-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                    <span class="inline-block"><i class="fas fa-comments"></i> Login to write a message</span>
                </router-link>
            </div>
        </section>
            </div>
  </div>
      <router-link to="/adverts" class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
         </svg>
         <span class="inline-block ml-1">Back</span>
      </router-link>
  </div>
  </div>
</template>

<script>
import { mapActions , mapState} from "vuex";
import Partner from '../../components/Partner.vue';

export default {
props: ["id"],
components:{
    Partner
},
  methods:{
    ...mapActions({
        fetchAdvert : 'advert/fetchAdvert'
    }),
  },
 computed: {
    advert () {
      return this.$store.state.advert.advert
    },
      currentUser() {
         return this.$store.getters.currentUser
      }
  },
  mounted() {
    this.fetchAdvert(this.id);
  },
}
</script>
