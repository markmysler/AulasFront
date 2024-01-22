<template>
    <h2>Mis reservas</h2>
    <div v-if="selectedReservation === ''">
        <v-btn class="bg-black" v-for="reservation in reservations" :key="reservation.id" @click="seeReservation(reservation)">
            <p>{{reservation.id}}</p>
            <p>{{reservation.aula_id}}</p>
            <p>{{reservation.start_date}}</p>
            <p>{{reservation.end_date}}</p>
            <p>{{reservation.user_category}}</p>
        </v-btn>
    </div>
    <div v-else>
        {{ selectedReservationData.start_date }}
        {{ end_date }}
        <v-btn @click="seeReservation({id: ''})">Volver a mis reservas</v-btn>
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