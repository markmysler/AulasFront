<template>
    <h2>Reservar un Aula</h2>
    <div class="w-75 text-center mb-5">
        <p>Cada reserva representa un dia de la semana con la frecuencia que se quiera. Si se quiere mas de un dia, hacer una reserva por cada dia de la semana.</p>
    </div>
    <div class="w-75 columnItemsCenter ga-3" v-if="page === 0">
        <div class="columnItemsCenter ga-3">
            <label for="aulaCapacity">¿Qué capacidad tiene que tener el Aula?</label>
            <v-text-field 
                id="aulaCapacity" 
                class="w-100" 
                placeholder="Capacidad del Aula" 
                type="number" 
                v-model="reservationData.aula_capacity"
                mandatory
                >
            </v-text-field>
        </div>
        <div class="columnItemsCenter ga-3">
            <label for="hasScreen">¿Necesitas Pantalla?</label>
            <v-btn-toggle id="hasScreen" variant="outlined" v-model="reservationData.has_screen" mandatory>
                <v-btn :value="true">
                    <v-icon icon="mdi-check"></v-icon>
                </v-btn>
                <v-btn :value="false">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-btn-toggle>
        </div>
        <div class="columnItemsCenter ga-3">
            <label for="hasNegatoscope">¿Necesitas Negatoscopio?</label>
            <v-btn-toggle id="hasNegatoscope" variant="outlined" v-model="reservationData.has_negatoscope" mandatory>
                <v-btn :value="true">
                    <v-icon icon="mdi-check"></v-icon>
                </v-btn>
                <v-btn :value="false">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-btn-toggle>
        </div>
        <v-btn @click="nextPage">Continuar</v-btn>
    </div>
    <div class="w-75 columnItemsCenter ga-3" v-if="page === 1">
        <v-btn variant="text" prepend-icon="mdi-chevron-left" @click="previousPage">
            Página anterior
        </v-btn>
        <div class="columnItemsCenter ga-3">
            <label for="dayOfWeek">Día de la Semana</label>
            <v-btn-toggle id="dayOfWeek" variant="outlined" v-model="reservationData.day" mandatory>
                <v-btn :value="0">
                    Lunes
                </v-btn>
                <v-btn :value="1">
                    Martes
                </v-btn>
                <v-btn :value="2">
                    Miércoles
                </v-btn>
                <v-btn :value="3">
                    Jueves
                </v-btn>
                <v-btn :value="4">
                    Viernes
                </v-btn>
                <v-btn :value="5">
                    Sábado
                </v-btn>
            </v-btn-toggle>
        </div>
        <v-btn @click="nextPage">Continuar</v-btn>
    </div>
    <div class="w-75 columnItemsCenter ga-3" v-if="page === 2">
        <v-btn variant="text" prepend-icon="mdi-chevron-left" @click="previousPage">
            Página anterior
        </v-btn>
        <p v-if="reservationData.day === 5">
            El rango de horarios del Sábado es de h1 a h2
        </p>
        <p v-else>
            El rango de horarios de la semana es de h1 a h2
        </p>
        <div class="columnItemsCenter ga-3">
            <v-text-field
                label="Horario de Inicio"
                type="time"
                suffix="GMT-3"
                v-model="reservationData.start_time"
            ></v-text-field>
            <v-text-field
                label="Horario de Finalización"
                type="time"
                suffix="GMT-3"
                v-model="reservationData.end_time"
            ></v-text-field>
        </div>
        <div class="columnItemsCenter ga-3">
            <label for="repeats">¿Se repite?</label>
            <v-btn-toggle id="repeats" variant="outlined" v-model="reservationData.has_frequency" mandatory>
                <v-btn :value="true">
                    <v-icon icon="mdi-check"></v-icon>
                </v-btn>
                <v-btn :value="false">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-btn-toggle>
        </div>
        <v-btn v-if="reservationData.has_frequency" @click="nextPage">
            Conitunar
        </v-btn>
        <v-btn v-else @click="submitReservationData">
            Enviar
        </v-btn>
    </div>
</template>
<script>
export default {
    name:'ReservationView',
    data(){
        return{
            page: 0,
            reservationData: {
                aula_capacity: 0,
                has_screen: false,
                has_negatoscope: false,
                day: null,
                start_time: null,
                end_time: null,
                has_frequency: false,
            }
        }
    },
    mounted(){
        document.title = 'Reservar un aula'
    },
    methods:{
        nextPage(){
            this.page += 1
        },
        previousPage(){
            this.page -= 1
        },
        submitReservationData(){
            console.log(this.reservationData);
        }
    }
}
</script>

<style scoped>

</style>