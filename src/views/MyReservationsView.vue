<template>
    <h2>Mis reservas</h2>
    <div>
        <div v-for="reservation in reservations" :key="reservation.id">
            <p>{{reservation.id}}</p>
            <p>{{reservation.aula_id}}</p>
            <p>{{reservation.start_date}}</p>
            <p>{{reservation.end_date}}</p>
            <p>{{reservation.user_category}}</p>


        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'MyReservationsView',
    data(){
        return{
            reservations: []
        }
    },
    methods:{
        async getMyReservations(){
            axios
            .get(`api/v1/my-reservations/${this.$store.state.user.id}`)
            .then(response=>{
                this.reservations = response.data
            })
        }
    },
    mounted(){
        document.title = 'Mis reservas',
        this.getMyReservations()
    }
}
</script>