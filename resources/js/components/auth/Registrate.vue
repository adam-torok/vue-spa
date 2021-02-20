<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">registrate</div>
                <div class="card-body">
                    <form @submit.prevent="registrate">
                        <div class="form-group row">
                            <label for="name">Name:</label>
                            <input type="text" v-model="form.name" class="form-control" placeholder="Your Name">
                        </div>
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="Login">
                        </div>
                        <div class="form-group row" v-if="registrateError">
                            <p class="error">
                                {{ registrateError }}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {registrate} from '../../helpers/auth';
    
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
                this.$store.dispatch('registrate');

                registrate(this.$data.form)
                    .then((res) => {
                       console.log(res);
                    })
                    .catch((error) => {
                       console.log(error);
                    });
            }
        },
        computed: {
            registrateError() {
                return 'vegbel';
            }
        }
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>

