<script lang="ts">
  import { ref } from 'vue'
  import {store} from '../store/store'

  export default{
    setup() {
            return {
                store,
            }
    },
      name: 'analisisSelectCultivo',
  }
</script>
<template>    
<div class="analisisCultivo">
    <label for="ph">
        pH
    </label>
    <br/>
    <input v-model.number="store.ph" placeholder=""/>
    <br/>
    <label for="textura-suelo">
        Textura de suelo
    </label>
    <br/>
    <select id="textura-suelo" v-model="store.tx">
        <option>-- Seleccione --</option>
        <option>Franco</option>
        <option>Arenoso</option>
        <option>Arcilloso</option>
        <option>Limoso</option>
        <option>Franco arenoso</option>
        <option>Franco arcilloso</option>
        <option>Franco limoso</option>
    </select>    
    <br/>   
    <label for="cic">CIC</label>
    <br/>
    <input id="cic" type="text" v-model.number="store.cic" placeholder=""/>
    <br/>
    <label for="n">Nitrógeno (N)</label>
    <br/>
    <input id="n" type="text" v-model.number="store.n" placeholder=""/>
    <br/>
    <label for="p">Fosforo (P)</label>
    <br/>
    <input id="p" type="text" v-model.number="store.p" placeholder=""/>
    <br/>
    <label for="k">Potasio (K)</label>
    <br/>
    <input id="k" type="text" v-model.number="store.k" placeholder=""/>
    <br/>
    <label for="mg">Magnesio (Mg)</label>
    <br/>
    <input id="mg" type="text" v-model.number="store.mg" placeholder=""/>
    <br/>
    <label for="ca">Calcio (Ca)</label>
    <br/>
    <input id="ca" type="text" v-model.number="store.ca" placeholder=""/>
    <br/>
    <label for="s">Azufre (S)</label>
    <br/>
    <input id="s" type="text" v-model.number="store.s" placeholder=""/>
    <br/>
    <label for="mn">Manganeso (Mn)</label>
    <br/>
    <input id="mn" type="text" v-model.number="store.mn" placeholder=""/>
    <br/>
    <label for="fe">Hierro (Fe)</label>
    <br/>
    <input id="fe" type="text" v-model.number="store.fe" placeholder=""/>
    <br/>
    <label for="al">Aluminio (Al)</label>
    <br/>
    <input id="al" type="text" class="input" v-model.number="store.al" placeholder=""/>
    <br/>
    <label for="b">Boro (B)</label>
    <br/>
    <input id="b" type="text" class="input" v-model.number="store.b" placeholder=""/>
    <br/>
    <br/>
</div>
</template>
<style scoped>
    .requerimiento {
        width: 15%;
        position: relative;
        display: inline-block;
    }
</style>