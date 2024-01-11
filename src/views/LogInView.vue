<template>
<div class="login-wrapper">
    <form @submit.prevent="submitForm">
        <input type="text" placeholder="Nombre de usuario" v-model="username">
        <input type="password" placeholder="Contraseña" v-model="password">
        <button>Enviar</button>
    </form>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'LogInView',
    data(){
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        async submitForm(){
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

                    this.$store.commit('setToken', token)

                    axios.defaults.headers.common['Authorization'] = 'Token ' + token

                    localStorage.setItem('token', token)

                    const toPath = this.$route.query.to || '/home'

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