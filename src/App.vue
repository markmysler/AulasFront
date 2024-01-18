<template>
  <v-app class="bg-white h-full">
    <HeaderComponent />
    <div class="routerViewWrapper columnItemsCenter mt-16">
      <router-view />
    </div>
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
body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.columnItemsCenter{
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2{
  text-align: center;
  font-size: 1.7rem;
  font-weight: 500;
  margin: 5vw 0 2vw 0;
}
</style>