<template>
  <v-app class="bg-white h-full">
    <HeaderComponent />
    <div class="routerViewWrapper">
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
.columnItemsCenter{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.routerViewWrapper{
  margin-top: 75px;
}
h2{
  text-align: center;
  font-size: 2rem;
  margin: 2vw 0;
}
</style>