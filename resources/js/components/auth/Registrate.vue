<template>
<div class= "p-4 pt-0 flex items-center justify-center bg-cover bg-center">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
        <form @submit.prevent="registrate">
            <label class="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
            <input v-model="form.name" type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
            <input v-model="form.email" type="email" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <label  class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
            <input type="password" v-model="form.password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            <button  type="submit" class="transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span class="inline-block mr-2">Registrate</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
                </form>
            </div>
        </div>
        <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span class="inline-block ml-1">Back to home</span>
            </button>
        </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "registrate",
        data() {
            return {
                form: {
                    email: '',
                    name : '',
                    password: ''
                },
                error: null
            };
        },
        methods: {
            registrate() {
                axios.post('/api/registrate', this.form)
                    .then(() => {
                        this.$router.push({ path: '/login' })
                        setTimeout(() => {
                            this.$store.dispatch('alert/success', 'Registration successful');
                        })
                    })
                    .catch((err) =>{
                        setTimeout(() => {
                            console.log(err);
                            this.$store.dispatch('alert/success', err);
                        })
                    })
                },
        },
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>

