<template>
  <div class="columnItemsCenter">
    <h2>Aulas Disponibles</h2>
    <v-btn @click="$router.push('/reservar')" elevation="2" class="bg-darkBrick text-white">Reservar aula</v-btn>
    <div class="aulasWrapper">
      <div class="aula columnItemsCenter" v-for="aula in aulas" :key="aula.id">
        <p> {{ aula.name }} </p>
        <p> {{ aula.max_capacity }} </p>
        <p> {{ aula.has_negatoscope }} </p>
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
  width: 85%;
  gap: 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3vw;
}
.aula{
  width: 40%;
  border: 1px solid black;
  padding: 2vw;
}
.aulaAvailable{
  border: 1px solid blue;
}
.aulaNotAvailable{
  background-color: red;
  color: white;
}
</style>