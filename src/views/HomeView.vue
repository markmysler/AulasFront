<template>
  <div class="home">
    <h1>{{$store.state.helloWorld}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  },
  mounted(){
      document.title = 'Inicio'
  }
}
</script>
