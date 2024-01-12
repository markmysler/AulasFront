<template>
  <v-app-bar elevation="3" class="bg-lightSilver">
      <h1 class="text-black">Aulas</h1>
      <div v-if="!$store.state.isAuthenticated">
        <v-btn elevation="2" class="bg-white">
          <router-link to="/iniciar-sesion" class="text-black">Iniciar sesión</router-link>
        </v-btn>
        <v-btn elevation="2" class="bg-lightBrick">
          <router-link to="/registrarse" class="text-white">Registrarse</router-link>
        </v-btn>
      </div>
      <div v-else>
        <v-btn @click="logout" elevation="2" class="bg-darkBrick text-white">Cerrar sesión</v-btn>
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