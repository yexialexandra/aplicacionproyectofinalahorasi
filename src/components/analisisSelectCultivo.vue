<script lang="ts">
  import { ref } from 'vue'

   const cic=ref('');
    const n=ref('');
    const p=ref('');
    const k=ref('');
    const mg=ref('');
    const ca=ref('');
    const s=ref('');
    const mn=ref('');
    const fe=ref('');
    const al=ref('');
    const b=ref('');
    const ph=ref('');
    const tx=ref('');

  export default{
      name: 'analisisSelectCultivo',
      props:{
          info:Object
      },
      data(){
          return{
              cic,
              n,
              p,
              k,
              mg,
              ca,
              s,
              mn,
              fe,
              al,
              b,
              ph,
              tx
          }
      }
  }
</script>
<template>    
<div class="analisisCultivo">
    <label for="ph" class="placeholder">
        pH
    </label>
    <br/>
    <input class="input" v-model.number="ph" placeholder=""/>
    <br/>
    <label for="textura-suelo" class="placeholder">
        Textura de suelo
    </label>
    <br/>
    <select id="textura-suelo" placeholder=" " class="input" v-model="tx">
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
    <label for="cic" class="placeholder">CIC</label>
    <br/>
    <input id="cic" type="text" class="input" v-model.number="cic" placeholder=""/>
    <br/>
    <label for="n" class="placeholder">Nitrógeno (N)</label><br/><input id="n" type="text" class="input" v-model.number="n" placeholder=""/><br/>
    <label for="p" class="placeholder">Fosforo (P)</label>
    <br/>
    <input id="p" type="text" class="input" v-model.number="p" placeholder=""/>
    <br/>
    <label for="k" class="placeholder">Potasio (K)</label>
    <br/>
    <input id="k" type="text" class="input" v-model.number="k" placeholder=""/>
    <br/>
    <label for="mg" class="placeholder">Magnesio (Mg)</label>
    <br/>
    <input id="mg" type="text" class="input" v-model.number="mg" placeholder=""/>
    <br/>
    <label for="ca" class="placeholder">Calcio (Ca)</label>
    <br/>
    <input id="ca" type="text" class="input" v-model.number="ca" placeholder=""/>
    <br/>
    <label for="s" class="placeholder">Azufre (S)</label>
    <br/>
    <input id="s" type="text" class="input" v-model.number="s" placeholder=""/>
    <br/>
    <label for="mn" class="placeholder">Manganeso (Mn)</label>
    <br/>
    <input id="mn" type="text" class="input" v-model.number="mn" placeholder=""/>
    <br/>
    <label for="fe" class="placeholder">Hierro (Fe)</label>
    <br/>
    <input id="fe" type="text" class="input" v-model.number="fe" placeholder=""/>
    <br/>
    <label for="al" class="placeholder">Aluminio (Al)</label>
    <br/>
    <input id="al" type="text" class="input" v-model.number="al" placeholder=""/>
    <br/>
    <label for="b" class="placeholder">Boro (B)</label>
    <br/>
    <input id="b" type="text" class="input" v-model.number="b" placeholder=""/>
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