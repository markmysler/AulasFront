<template>
    <h2>Reservar un Aula</h2>
    <!-- Características del Aula -->
    <div class="w-75 columnItemsCenter ga-3" v-if="page === ''">
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
            <p>¿Necesitas Pantalla?</p>
            <v-btn-toggle variant="outlined" v-model="reservationData.has_screen" mandatory>
                <v-btn :value="true">
                    <v-icon icon="mdi-check"></v-icon>
                </v-btn>
                <v-btn :value="false">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-btn-toggle>
        </div>
        <div class="columnItemsCenter ga-3">
            <p>¿Necesitas Negatoscopio?</p>
            <v-btn-toggle variant="outlined" v-model="reservationData.has_negatoscope" mandatory>
                <v-btn :value="true">
                    <v-icon icon="mdi-check"></v-icon>
                </v-btn>
                <v-btn :value="false">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-btn-toggle>
        </div>
        <v-btn @click="movePage('evento')">Continuar</v-btn>
    </div>
    <!-- ¿Qué tipo de Evento es? -->
    <div class="w-75 columnItemsCenter ga-3" v-if="page === 'evento'">
        <v-btn variant="text" prepend-icon="mdi-chevron-left" @click="movePage('')">
            Página anterior
        </v-btn>
        <div class="columnItemsCenter ga-3">
            <p>¿Qué tipo de Evento es?</p>
            <v-btn-toggle variant="outlined" v-model="reservationData.type" mandatory>
                <v-btn :value="'regular'">
                    Evento regular
                </v-btn>
                <v-btn :value="'onetime'">
                    Evento de una vez
                </v-btn>
            </v-btn-toggle>
        </div>
        <!-- Evento Regular -->
        <div class="columnItemsCenter ga-3" v-if="reservationData.type === 'regular'">
            <p>Días de la Semana</p>
            <v-btn-toggle variant="outlined" v-model="daysObject" mandatory multiple>
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
            <v-btn @click="movePage('regularhours')">Continuar</v-btn>
        </div>
        <!-- Horarios por cada dia de la semana -->
        <div class="columnItemsCenter ga-3" v-if="page === 'regularhours'">
            <v-btn variant="text" prepend-icon="mdi-chevron-left" @click="movePage('evento')">
                Página anterior
            </v-btn>
            <p>Escribir rango de Horarios aclarando Sabado</p>
            <div v-for="(item, index) in selectedDaysArray" :key="index" class="columnItemsCenter ga-3">
                <v-text-field
                    label="Horario de Inicio"
                    type="time"
                    suffix="GMT-3"
                    v-model="reservationData.times[index]"
                ></v-text-field>
                <v-text-field
                    label="Horario de Finalización"
                    type="time"
                    suffix="GMT-3"
                    v-model="reservationData.end_time[index]"
                ></v-text-field>
            </div>
        </div>
        <!-- Evento One Time -->
        <div class="w-75 columnItemsCenter ga-3" v-if="reservationData.type === 'onetime'">
            <v-date-picker 
                v-model="reservationData.start_date"
                show-adjacent-months
                :title="'Fecha de incio'"
                :header="'Seleccione un día'"
            ></v-date-picker>
            <v-date-picker 
                v-model="reservationData.end_date"
                show-adjacent-months
                :title="'Fecha de finalización'"
                :header="'Seleccione un día'"
            ></v-date-picker>
            <v-btn @click="movePage('')">Continuar</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name:'ReservationView',
    data(){
        return{
            page: '',
            reservationData: {
                aula_capacity: 0,
                has_screen: false,
                has_negatoscope: false,
                type: '',
                days: [],
                start_time: null,
                end_time: null,
                start_date: null,
                end_date: null,
                has_frequency: false,
            },
            daysObject: {},
        }
    },
    computed:{
        selectedDaysArray() {
            return Object.keys(this.daysObject).filter(day => this.daysObject[day]);
        },
    },
    mounted(){
        document.title = 'Reservar un aula'
    },
    methods:{
        movePage(pagina){
            this.page = pagina
        },
        submitReservationData(){
            this.reservationData.days = this.selectedDaysArray;
            console.log(this.reservationData);
        },
    }
}
</script>

<style scoped>

</style>