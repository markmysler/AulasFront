<template>
    <p>mostrar datos del aula y calendario del dia para ese aula</p>
</template>
<script>
import axios from 'axios'
export default {
    name: 'AulaDetailView',
    data(){
        return{
            aulaData: null,
            aulaId: '',
        }
    },
    methods:{
        getAulaData(id, data){
            // get aula detalle info 
            // data = lo que llega del server
        }
    },
    mounted(){
        this.aulaId = this.$route.params.id
        this.getAulaData(this.aulaId,this.aulaData)
    }
}
</script>