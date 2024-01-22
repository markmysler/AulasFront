<template>
  <div class="columnItemsCenter">
    <h2>Aulas Disponibles</h2>
    <v-btn @click="$router.push('/reservar')" elevation="3" class="bg-blue text-white mt-3">Reservar aula</v-btn>
    <div class="aulasWrapper">
      <div class="aula columnItemsCenter text-center" v-for="aula in aulas" :key="aula.id" @click="$router.push(`/aula/${aula.id}`)">
        <p>{{ aula.name }}</p>
        <p>Capacidad: {{ aula.max_capacity }}</p>
        <p>Negatoscopio: {{ aula.has_negatoscope }}</p>
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
      .get('/api/v1/aulas/')
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
  gap: 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 7vw 2vw;
}
.aula{
  width: 40%;
  background-color: rgba(12, 184, 241, 0.3);
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 6px 6px 10px -4px rgba(0,0,0,0.3);
  -webkit-box-shadow: 6px 6px 10px -4px rgba(0,0,0,0.3);
  -moz-box-shadow: 6px 6px 10px -4px rgba(0,0,0,0.3);
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