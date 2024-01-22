<template>
    <h2>Perfil</h2>
    <div class="profiletInfo">
        <p>Nombre: {{ profile.name }} </p>
        <p>Email: {{ profile.email }} </p>
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
                name: '',
                email: '',
                id: ''
            }
        }
    },
    methods:{
        editProfile(){
            console.log('Editar Perfil');
        },
        getUserData(){
                this.profile.name = this.$store.state.user.username;
                this.profile.email = this.$store.state.user.email;
                this.profile.id = this.$store.state.user.id;
            }
    },
    mounted(){
        document.title = 'Perfil',
        this.getUserData()
    }
}
</script>

<style scoped>
.profiletInfo{
    width: 85%;
    margin: 5vw;
}
</style>