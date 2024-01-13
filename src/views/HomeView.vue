<template>
  <div class="home">
    <h2>Ver Aulas Disponibles Ahora</h2>
    <div class="columnItemsCenter aulasWrapper">
      <div class="aula" v-for="aula in aulas" :key="aula.id">
        <p>
          {{ aula.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data(){
    return {
      aulas: []
    }
  },
  methods:{
    async getAulas(){
      await axios
      .get('/api/v1/get-aulas/')
      .then(response => {
        this.aulas = response.data;
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  components: {
    
  },
  mounted(){
    document.title = 'Inicio'
    this.getAulas()
  }
}
</script>

<style scoped>
.aulasWrapper{
  gap: 2vw;
}
.aula{
  border: 1px solid black;
}
</style>