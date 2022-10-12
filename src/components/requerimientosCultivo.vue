<script lang="ts">
import {ref, computed} from "vue";
import ItemRequerimiento from "./itemRequerimiento.vue";
import AnalisisSelectCultivo from "./analisisSelectCultivo.vue";
import {store} from '../store/store'

    export default {
        setup() {
            return {
                store
            }
        },
        components: { ItemRequerimiento, AnalisisSelectCultivo },
        computed: {
            enmiendas() {
                let cantCal, satAl = 0;
                satAl = (store.al / (store.ca + store.mg + store.k + store.al))*100;
                if(satAl>10){
                    cantCal=store.al-((10*store.al)/satAl)
                }   

                return cantCal;
            },
            fertilizantes(){
                let cantN, cantP, cantK, ureaReq, dapReq, kclReq, nExiste, pExiste, kExiste = 0;

                const valN = parseFloat(store.requerimientos.filter( item => item.key === 'n' )[0].value);
                const valP = parseFloat(store.requerimientos.filter( item => item.key === 'p' )[0].value);
                const valK = parseFloat(store.requerimientos.filter( item => item.key === 'k' )[0].value);


                cantN = (valN-(((2000000*store.n)/100)*1.25)*0.5)*11
                cantP = (valP-(store.p*2.29*2*(1)*0.2))*11
                cantK = (valK-(store.k*1.2*1170*0.4))*11

                dapReq=(cantP*100)/46
                if((cantN-(dapReq*0.18))>0){
                    ureaReq=(cantN-(dapReq*0.18))*100/46
                }else{
                    ureaReq=0
                }
                kclReq=(cantK*100)/60
                return {
                urea: ureaReq,
                dap: dapReq,
                kcl: kclReq
                }
            }

  }
    }

</script>
<template>
<div class="general">
    <div class="form">
        <h5>Diligencie los resultados del análisis de suelos</h5>
        <br/>
        <AnalisisSelectCultivo></AnalisisSelectCultivo>
    </div>
    <div class="form">
    <h5>Requerimiento del cultivo <br/> Aguacate</h5>
    <br/>
    <ItemRequerimiento/>
    <br/>
    <br/>
    </div>
    <div class="form observaciones">
        <h5>Recomendaciones de fertilización y enmiendas</h5>
        <hr/>
        <p>Enmienda: {{enmiendas}}Kg/sitio</p>
        <p>La aplicación de cal dolomita debe realizarse de forma homogénea en el lote con 
            el fin de neutralizar la cantidad de Al intercambiable en el suelo</p>
        <hr/>
        <p>Fertilizantes</p>
        <hr/>
        <p>Urea: {{fertilizantes.urea}} kg/planta/año</p>
        <p>Las aplicaciones deben distribuirse acorde al momento fenológico de la planta, 
            concentrando las aplicaciones en periodos vegetativos y reduciendo la dosis en 
        periodos reproductivos a una proporción 2:1</p>
        <hr/>
        <p>DAP: {{fertilizantes.dap}}kg/planta/año</p>
        <p>Las aplicaciones deben distribuirse acorde al numero de aplicaciones a realizar,
            teniendo en cuenta la densidad del suelo para optimizar el aprovechamiento 
            de los nutrientes.
        </p>
        <hr/>
        <p>KCl: {{fertilizantes.kcl}}kg/planta/año</p>
        <p>Las aplicaciones deben distribuirse acorde al momento fenológico de la planta, 
            concentrando las aplicaciones en periodos vegetativos y reduciendo la dosis en 
        periodos reproductivos a una proporción 2:1</p>
        <p>En la fertilización anual se debe realizar aplicación de agrimins (elementos menores) a una proporción de 4:1 
            - Elementos mayores:Elementos menores.</p>
    </div>
</div>
</template>
<style scoped>
.general {
  align-items: center;
  background-color: rgb(255, 255, 255);
  display:flex;
  justify-content: center;
  height: 100vh;
}

.form {
  background-color: rgb(243, 251, 255);
  border: solid 2px;
  border-color: rgb(163, 211, 235);
  border-radius: 20px;
  box-sizing: border-box;
  height: 52vw;
  padding: 1%;
  width: 22%;
  color:#0b0909;
  margin: 10px;
  margin-top: 10%;
  position: static;
}
.observaciones{
    width: 40%;
}
input[type=text] {
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>