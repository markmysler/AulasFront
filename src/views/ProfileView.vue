<template>
    <h2>Perfil</h2>
    <div class="profiletInfo">
        <p>Nombre: {{ profile.name }} </p>
        <p>Email: {{ profile.email }} </p>
        <p>Categoria: {{ profile.categoria }} </p>
    </div>
    <div>
        <button @click="editProfile" class="bg-blue pa-4 rounded-pill">Editar Perfil</button>
    </div>
</template>

<script>
export default {
    name:'ProfileView',
    /* Perfil Provisorio */
    data(){
        return{
            profile: {
                name: 'Lio',
                email: 'liobensignor@gmail.com',
                categoria: 'UBA'
            }
        }
    },
    methods:{
        editProfile(){
            console.log('Editar Perfil');
        }
    },
    mounted(){
        document.title = 'Perfil'
    }
}
</script>

<style scoped>
.profiletInfo{
    width: 85%;
    margin: 5vw;
}
</style>