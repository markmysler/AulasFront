<template>
  <v-app-bar elevation="3" class="bg-lightSilver">
    <v-app-bar-nav-icon icon="mdi-menu" @click="showMenu = !showMenu"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-black text-h4">Aulas</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="showMenu" app>
    <v-list tag="ul" v-if="!$store.state.isAuthenticated">
      <li v-for="item in menuRegular" :key="item.title" @click="closeHeader">
        <v-list-item :to="item.path">
          <v-list-item-action>
            <v-icon color="blue" :icon="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title> {{ item.title }}</v-list-item-title>
        </v-list-item>
      </li>
    </v-list>
    <v-list tag="ul" v-else class="menuRequiredLogin">
      <div>
        <li v-for="item in menuRequiredLogin" :key="item.title" @click="closeHeader">
          <v-list-item :to="item.path">
            <v-list-item-action>
              <v-icon color="blue" :icon="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item>
        </li>
      </div>
      <li class="logout">
        <v-list-item @click="this.logout()">
          <v-list-item-action>
            <v-icon color="blue" icon="mdi-power"></v-icon>
          </v-list-item-action>
          <v-list-item-title>Cerrar sesión</v-list-item-title>
        </v-list-item>
      </li>
    </v-list>
  </v-navigation-drawer>
</template>



<script>
import axios from 'axios';
export default {
  name: 'HeaderComponent',
  data(){
    return{
      showMenu: false,
      menuRegular: [
        {
          path: '/iniciar-sesion',
          title: 'Iniciar sesión',
          icon: 'mdi-account-circle'
        },
        {
          path: '/registrarse',
          title: 'Registrarse',
          icon: 'mdi-account-plus'
        },
        {
          path: '/',
          title: 'Tutorial',
          icon: 'mdi-school'
        },
      ],
      menuRequiredLogin: [
        {
          path: '/inicio',
          title: 'Inicio',
          icon: 'mdi-home'
        },
        {
          path: '/mis-reservas',
          title: 'Mis Reservas',
          icon: 'mdi-calendar-multiselect'
        },
        {
          path: '/reservar',
          title: 'Reservar',
          icon: 'mdi-calendar-plus'
        },
        {
          path: '/',
          title: 'Tutorial',
          icon: 'mdi-school'
        },
        {
          path: '/perfil',
          title: 'Perfil',
          icon: 'mdi-account'
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
    },
    closeHeader(){
      this.showMenu = false
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
.v-toolbar-title__placeholder{
  font-family: Verdana, Geneva, Tahoma, sans-serif
}
a{
  text-decoration: none;
}

.v-list-item__content{
  display: flex;
  gap: 1vh;
}

</style>