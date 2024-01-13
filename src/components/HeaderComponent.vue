<template>
  <v-app-bar elevation="3" class="bg-lightSilver">
      <h1 class="text-black">Aulas</h1>
      <div v-if="!$store.state.isAuthenticated">
        <v-btn elevation="2" class="bg-white text-black" @click="$router.push('/iniciar-sesion')">
          Iniciar sesión
        </v-btn>
        <v-btn elevation="2" class="bg-lightBrick text-white" @click="$router.push('/registrarse')">
          Registrarse
        </v-btn>
      </div>
      <div v-else>
        <v-btn @click="logout" elevation="2" class="bg-darkBrick text-white">Cerrar sesión</v-btn>
        <v-btn @click="$router.push('/reservar')" elevation="2" class="bg-darkBrick text-white">Reservar aula</v-btn>
      </div>
    </v-app-bar>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HeaderComponent',
  methods:{
    logout(){
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userid');
      this.$store.commit('removeToken');
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.v-app-bar{
  width: 100%;
  padding: 0.5vw 0;
  div{
    display: flex;
    justify-content: space-between;
    padding: 1vw 2vw;
    gap: 2vw;
  }
}
h1{
  font-size: 3rem;
  margin-left: 5vw;
}
a{
  text-decoration: none;
}

</style>