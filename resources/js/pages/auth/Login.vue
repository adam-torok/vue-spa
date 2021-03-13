<template>
   <div class="login__container p-4 mt-4 pt-0 flex items-center justify-center bg-cover bg-center">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
         <div class="bg-white dark:bg-gray-800 shadow-lg w-full rounded-lg divide-y divide-gray-200">
        
           <div class="px-5 py-7">
               <form @submit.prevent="authenticate">
                  <label
                     class="font-semibold text-sm dark:text-gray-200 text-gray-600 pb-1 block"
                     >E-mail</label
                  >
                  <input
                     required
                     v-model="form.email"
                     placeholder="Enter your email address"
                     type="email"
                     class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  />
                  <label
                     class="font-semibold text-sm dark:text-gray-200 text-gray-600 pb-1 block"
                     >Password</label
                  >
                  <input
                     required
                     type="text"
                     placeholder="Enter your password"
                     v-model="form.password"
                     class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  />
                  <button
                     type="submit"
                     class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                  >
                     <span class="inline-block mr-2"
                        >{{ loginText }}
                        <i
                           v-show="isLoading"
                           class="fas fa-spinner fa-spin"
                        ></i>
                     </span>
                     <svg
                        v-show="!isLoading"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-4 h-4 inline-block"
                     >
                        <path
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                     </svg>
                  </button>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { login } from "../../helpers/auth";
import { mapActions } from "vuex";

export default {
   name: "login",
   data() {
      return {
         loginText: "Login",
         form: {
            email: "",
            password: "",
         },
         isLoading: false,
      };
   },
   methods: {
      ...mapActions({
         login: "login",
      }),
      authenticate() {
         this.isLoading = true;
         this.loginText = "Logging in";
         setTimeout(() => {
            this.$store.dispatch('login',this.$data.form)
               .then((res) => {
                  this.$store.commit("LOGIN_SUCCESS", res);
                  this.$router.push({ path: "/adverts" });
               })
               .catch((error) => {
                  setTimeout(() => {
                     this.$store.dispatch('alert/error', error);
                     this.loginText = "Login";
                     this.isLoading = false;
                  }, 1000);
               });
         }, 2000);
      },
   },
};
</script>

<style scoped>
.error {
   text-align: center;
   color: red;
}
.alerter {
   transition: all 0.3s;
}
.login__container{
   background: url('https://i.pinimg.com/originals/0b/1f/85/0b1f8517c066dd89ff8022c31bf23621.jpg');
   background-size: cover;
   background-position: center;
   height: calc(100vh - 90px);
   backdrop-filter: blur(10px);
}
</style>

