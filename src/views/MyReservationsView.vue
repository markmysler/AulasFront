<template>
    <h2>Mis reservas</h2>
    <div v-if="selectedReservation === ''" class="columnItemsCenter w-75 ga-4">
        <v-card class="bg-blue-darken-1 w-75 pa-3" v-for="reservation in reservations" :key="reservation.id" @click="seeReservation(reservation)">
            <h3>Aula {{$store.state.aulas.find(a=>a.id ===reservation.aula_id).name}}</h3>
            <p>Reserva {{reservation.id}}</p>
            <p>Inicio: {{reservation.start_date.split('T')[0]}}</p>
            <p>Fin: {{reservation.end_date.split('T')[0]}}</p>
        </v-card>
    </div>
    <div v-else class="columnItemsCenter">
        <v-btn class="bg-blue py-2 px-5 elevation-5 rounded-lg mb-5" @click="seeReservation('')">Volver a mis reservas</v-btn>
        <div>
            <h3>Aula {{$store.state.aulas.find(a=>a.id ===selectedReservationData.aula_id).name}}</h3>
            <p>Reserva {{selectedReservationData.id}}</p>
            <p>Inicio: {{selectedReservationData.start_date.split('T')[0]}}</p>
            <p>Fin: {{selectedReservationData.end_date.split('T')[0]}}</p>
            <p>Categoría: {{selectedReservationData.user_category}}</p>
            <p>Frequencia: {{selectedReservationData.user_category}}</p>
            <h4 class="mt-2">Bloques reservados</h4>
            <div class="d-flex ga-2 py-3">
                <p v-for="time in selectedReservationData.times.split(',')" :key="time" class=" text-center bg-blue rounded-pill py-2 px-4">
                    {{time.length >= 3 ? time : `${time}:00`}}
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'MyReservationsView',
    data(){
        return{
            reservations: [],
            selectedReservation: '',
            selectedReservationData: null
        }
    },
    methods:{
        async getMyReservations(){
            axios
            .get(`api/v1/my-reservations/${this.$store.state.user.id}`)
            .then(response=>{
                this.reservations = response.data
            })
            .catch(error=>{
                console.log(error);
            })
        },
        async seeReservation(reservation){
            if (typeof reservation === 'string') {
                this.selectedReservation = reservation
                this.selectedReservationData = null
            }else{
                this.selectedReservation = reservation.id
                this.selectedReservationData = reservation
            }
            
        }
    },
    mounted(){
        document.title = 'Mis reservas',
        this.getMyReservations()
    }
}
</script>
<style scoped>
    .v-btn__content{
        display: flex;
        flex-direction: column;
    }
    .v-btn.v-btn--density-default{
        height: auto;
    }
</style>