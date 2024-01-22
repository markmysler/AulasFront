<template>
  <div class="columnItemsCenter">
    <h2>Aulas Disponibles</h2>
    <v-btn @click="$router.push('/reservar')" elevation="3" class="bg-blue text-white mt-3">Reservar aula</v-btn>
    <div class="aulasWrapper">
      <v-card class="aula d-flex flex-column justify-space-between bg-blue-darken-1 elevation-7 text-start pa-5" v-for="aula in aulas" :key="aula.id" @click="$router.push(`/aula/${aula.id}`)">
        <div>
          <h3>Aula {{ aula.name }}</h3>
          <p>Capacidad: {{ aula.max_capacity }} personas</p>
        </div>
        
        <div>
          <p class="mt-3" v-if="aula.has_negatoscope || aula.has_screen">Tiene:</p>
        <ul class="pl-4">
          <li v-if="aula.has_negatoscope">Negatoscopio</li>
          <li v-if="aula.has_screen">Pantalla</li>
        </ul>
        </div>
        
      </v-card>
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
        this.$store.state.aulas = response.data
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
  margin: 7vw 2vw;
}
.aula{
  width: 45%;
  height: 30vh;
  border-radius: 20px;
}
.aulaAvailable{
  border: 1px solid blue;
}
.aulaNotAvailable{
  background-color: red;
  color: white;
}
</style>