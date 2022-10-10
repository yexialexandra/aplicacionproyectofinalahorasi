<script lang="ts">
import {ref, reactive, computed, watch} from "vue";
import ItemRequerimiento from "./itemRequerimiento.vue";
import AnalisisSelectCultivo from "./analisisSelectCultivo.vue";

    export default {
    data() {
        return {
            requerimientos: [
                {
                    "key": "ph",
                    "label": "pH",
                    "type": "text",
                    "value": "5.5"
                },
                {
                    "key": "textura-de-suelo",
                    "label": "Textura de suelo",
                    "type": "select",
                    "options": [
                        { "value": "franco", "label": "Franco" },
                        { "value": "arenoso", "label": "Arenoso" },
                        { "value": "archilloso", "label": "Arcilloso" },
                        { "value": "limoso", "label": "Limoso" },
                        { "value": "franco-arenoso", "label": "Franco arenoso" },
                        { "value": "franco-arcilloso", "label": "Franco arcilloso" },
                        { "value": "franco-limoso", "label": "Franco limoso" }
                    ],
                    "value": "franco-arenoso"
                },
                {
                    "key": "cic",
                    "label": "CIC",
                    "type": "text",
                    "value": "200"
                },
                {
                    "key": "n",
                    "label": "Nitrógeno (N)",
                    "type": "text",
                    "value": "51.5"
                },
                {
                    "key": "p",
                    "label": "Fósforo (P)",
                    "type": "text",
                    "value": "20.6"
                },
                {
                    "key": "k",
                    "label": "Potasio (K)",
                    "type": "text",
                    "value": "93.8"
                },
                {
                    "key": "ca",
                    "label": "Calcio (Ca)",
                    "type": "text",
                    "value": "1.7"
                },
                {
                    "key": "s",
                    "label": "Azufre (S)",
                    "type": "text",
                    "value": "6.9"
                },
                {
                    "key": "mg",
                    "label": "Magnesio (Mg)",
                    "type": "text",
                    "value": "5.9"
                },
                {
                    "key": "mn",
                    "label": "Manganeso (Mn)",
                    "type": "text",
                    "value": "1"
                },
                {
                    "key": "b",
                    "label": "Boro (B)",
                    "type": "text",
                    "value": "1.2"
                },
                {
                    "key": "fe",
                    "label": "Hierro (Fe)",
                    "type": "text",
                    "value": "0.3"
                },
                {
                    "key": "al",
                    "label": "Aluminio (Al)",
                    "type": "text",
                    "value": "-"
                }              
            ]
        };
    },
    props:{
        cic:Number,
        n:Number,
        p:Number,
        k:Number,
        mg:Number,
        ca:Number,
        s:Number,
        mn:Number,
        fe:Number,
        al:Number,
        b:Number,
        tx:String,
        ph:Number  
    },
    components: { ItemRequerimiento, AnalisisSelectCultivo }
}
</script>
<template>
<div class="general">
    <div class="form">
        <h3>Diligencie los resultados del análisis de suelos</h3>
        <br/>
        <AnalisisSelectCultivo></AnalisisSelectCultivo>
    </div>
    <div class="form">
    <h3>Requerimiento del cultivo <br/> Aguacate</h3>
    <br/>
    <ItemRequerimiento v-for="item in requerimientos" :key="item.key" :info="item"/>
    <br/>
    <br/>
    </div>
    <div class="form observaciones">
        <h3>Recomendaciones de fertilización y enmiendas</h3>
    </div>
    <!--<div class="recomendaciones">
        <p>Enmienda: {{al/(ca+mg+k+al)}}</p>
        <p>Fertilización: </p>
        <p v-for="(value, key) in requerimientos">
        {{value-((((2000000*n?)/100)*1.25)/100)*0.5}}
        </p>

        <p>DAP: {{}}</p>
        <p>KCl: {{}}</p>
    </div>-->
</div>
</template>
<style scoped>
.general {
  align-items: center;
  background-color: rgb(190, 249, 190);
  display: flex;
  justify-content: center;
  height: 100vh;
}

.form {
  background-color: #043109;
  border-radius: 20px;
  box-sizing: border-box;
  height: 85%;
  padding: 1%;
  width: 22%;
  color:#FFFFFF;
  margin: 10px;
}

.observaciones{
    width: 40%;
}
</style>