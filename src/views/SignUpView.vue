<template>
    <div class="registerWrapper columnItemsCenter">
        <h2>Registrarse</h2>
        <v-form @submit.prevent="submitForm" class="columnItemsCenter w-75">
            <v-text-field class="w-50" placeholder="Nombre de usuario"  v-model="username" />
            <v-text-field 
                class="w-50" 
                placeholder="Contraseña"  
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
            />
            <v-text-field 
                class="w-50" 
                placeholder="Repetir Contraseña"  
                v-model="password2"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
            />
            <v-btn type='submit'>Enviar</v-btn>
        </v-form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'SignUpView',
    data(){
        return{
            username: '',
            password: '',
            password2: '',
            show1: false,
            show2: false,
            errors: [],
        }
    },
    methods: {
        async submitForm(){
            this.errors = [];
            if (this.username === '') {
                this.errors.push('Usuario Vacio')
            }
            if (this.password === '') {
                this.errors.push('Password Vacio')
            }
            if (this.password !== this.password2) {
                this.errors.push('Las contraseñas no son iguales')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password,
                }
                axios
                .post('/api/v1/users/', formData)
                .then(response => {
                    this.loginUser(formData)
                })

            }
        },
        async loginUser(formData){
            axios.defaults.headers.common['Authorization'] = '';
            localStorage.removeItem('token');
            await axios
            .post('/api/v1/token/login/', formData)
            .then(response => {
                const token = response.data.auth_token;
                this.$store.commit('setToken', token);
                axios.defaults.headers.common['Authorization'] = 'Token ' + token;
                localStorage.setItem('token', token);
                this.$router.push('/inicio');
            })
            .catch(error=>{
                this.$router.push('/login')
            })
        }
    },
    mounted(){
        document.title = 'Registrarse'
    }
}
</script>

<style scoped>
.columnItemsCenter{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.registerWrapper{
    margin: 15vw;
}
</style>