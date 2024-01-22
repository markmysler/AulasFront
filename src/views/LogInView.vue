<template>
<div class="columnItemsCenter w-100 py-5 ga-5">
    <h2>Iniciar Sesión</h2>
    <v-form @submit.prevent="submitForm" class="columnItemsCenter w-100">
        <v-text-field class="w-75" placeholder="Nombre de usuario"  v-model="username" />
        <v-text-field 
            class="w-75" 
            placeholder="Contraseña"  
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
        />
        <div v-if="errors.length">
            <p v-for="error in errors" :key="error">
                {{ error }}
            </p>
        </div>
        <v-btn variant="elevated" color="blue" size="large" class="mt-6 px-10" type='submit'>Ingresar</v-btn>
        <div class="w-100 d-flex flex-row justify-center ga-2 mt-5">
            <p class="text-blue-grey-lighten-1">¿No tienes una cuenta?</p>
            <router-link class="text-blue" to="/registrarse">Registrate</router-link>
        </div>
    </v-form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'LogInView',
    data(){
        return {
            username: '',
            password: '',
            show1: false,
            errors: [],
        }
    },
    methods:{
        async submitForm(){
            this.errors = [];
            axios.defaults.headers.common['Authorization'] = ''
            localStorage.removeItem('token')

            const formData = {
                username: this.username,
                password: this.password
            }

            await axios
                .post('/api/v1/token/login/', formData)
                .then(response=>{
                    const token = response.data.auth_token
                    console.log(response);
                    this.$store.commit('setToken', token)

                    axios.defaults.headers.common['Authorization'] = 'Token ' + token

                    localStorage.setItem('token', token)

                    const toPath = this.$route.query.to || '/inicio'

                    this.$router.push(toPath)
                })
                .catch(error=>{
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    }else{
                        this.errors.push('Ocurrio un error. Intente otra vez.')
                        console.log(JSON.stringify(error));
                    }
                })
        }
    },
    mounted(){
        document.title = 'Iniciar Sesion'
    }
}
</script>

<style scoped lang="scss">
input{
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    padding: 0.5vw 1vw;
}
.v-input__append{
    margin-inline: 0;
}
</style>