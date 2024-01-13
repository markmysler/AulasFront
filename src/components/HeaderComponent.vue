<template>
  <v-app-bar elevation="3" class="bg-lightSilver">
    <v-app-bar-nav-icon icon="mdi-menu" @click="showMenu = !showMenu"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-black">Aulas</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="showMenu" app>
    <v-list tag="ul">
      <li v-for="item in menu" :key="item.titulo">
        <v-list-item :to="item.path">
          <v-list-item-action>
            <v-icon color="primary">mdi-{{ item.icono }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </li>
    </v-list>
  </v-navigation-drawer>
  <!-- <div v-if="$store.state.isAuthenticated">
      <v-btn elevation="2" class="bg-white text-black" @click="$router.push('/iniciar-sesion')">
        Iniciar sesión
      </v-btn>
      <v-btn elevation="2" class="bg-lightBrick text-white" @click="$router.push('/registrarse')">
        Registrarse
      </v-btn>
    </div> -->
</template>



<script>
import axios from 'axios';
export default {
  name: 'HeaderComponent',
  data(){
    return{
      showMenu: false,
      menu: [
        {
        titulo: 'IniciarSesion',
        icono: 'home',
        path: '/iniciar-sesion',
      },
      ]
    }
  },
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