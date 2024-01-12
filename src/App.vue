<template>
  <v-app class="bg-white h-full">
    <HeaderComponent />
    <router-view />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
h2{
  font-size: 2rem;
}
</style>