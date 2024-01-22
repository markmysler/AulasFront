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
        <v-btn class="bg-blue" :disabled="reservationData.aula_capacity <= 0" @click="movePage('datesFrequency')">Continuar</v-btn>
    </div>
    <!-- Fecha Inicio - Frecuencia - Fecha Fin -->
    <div class="w-75 columnItemsCenter ga-3" v-if="page === 'datesFrequency'">
        <v-btn variant="text" prepend-icon="mdi-chevron-left" @click="movePage('')">
            Página anterior
        </v-btn>
        <div class="w-75 columnItemsCenter ga-3">
            <v-date-picker 
                v-model="reservationData.start_date"
                show-adjacent-months
                :title="'Fecha de incio'"
                :header="'Seleccione un día'"
                :min="today"
            ></v-date-picker>
            <v-select
            class="w-75"
            label="Frecuencia"
            :items="frequencies"
            item-title="label"
            item-value="value"
            v-model="reservationData.frequency"
            >
            </v-select>
            <v-date-picker 
                v-model="reservationData.end_date"
                show-adjacent-months
                :title="'Fecha de finalización'"
                :header="'Seleccione un día'"
                :min="tomorrow"
                v-if="reservationData.frequency !== ''"
            ></v-date-picker>
            <v-btn :disabled="reservationData.start_date === null || (reservationData.frequency !== '' && reservationData.end_date === null)" class="bg-blue" @click="submitReservationData">Continuar</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name:'ReservationView',
    data(){
        return{
            page: '',
            today: null,
            reservationData: {
                aula_capacity: 0,
                has_screen: false,
                has_negatoscope: false,
                start_date: null,
                end_date: null,
                frequency: '',
                times: [],
            },
            frequencies: [
                {
                    label: 'No se repite',
                    value: '',
                },
                {
                    label: 'Diariamente',
                    value: 'daily',
                },
                {
                    label: 'Semanalmente',
                    value: 'weekly',
                },
                {
                    label: 'Mensualmente',
                    value: 'monthly',
                },
            ]
        }
    },
    mounted(){
        document.title = 'Reservar un aula'
        let date = new Date();

        let month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        this.today = [year, month, day].join('-');
    },
    methods:{
        movePage(pagina){
            this.page = pagina
        },
        submitReservationData(){
            this.reservationData.start_date = this.formattedStart
            if (this.reservationData.frequency === '') {
                this.reservationData.end_date = this.formattedStart
            }else{
                this.reservationData.end_date = this.formattedEnd
            }
            console.log(this.reservationData);

        },
        
    },
    computed: {
    formattedStart() {
        if (!this.reservationData.start_date) return null;

        const d = this.reservationData.start_date;
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    },
    formattedEnd() {
        if (!this.reservationData.end_date) return null;

        const d = this.reservationData.end_date;
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    },
    tomorrow(){
        let dateArr = this.formattedStart.split('-')
        dateArr[2] = (parseInt(dateArr[2],10) + 1).toString()
        return dateArr.join('-')
    }
}

}
</script>

<style scoped>
</style>