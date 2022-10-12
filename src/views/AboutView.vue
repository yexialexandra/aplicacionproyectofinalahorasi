<template>
    <div class="contenidoProduccion">
      <br/>
      <CarruselComponent/>
    </div>
  </template>
  <script lang="ts">
import CarruselComponent from '@/components/CarruselComponent.vue';
  export default{
    name: "ItemRequerimiento",
    components: { CarruselComponent }
}
</script>
<style scoped>
.contenidoProduccion{
  width: 80%;
  height: 50%;
  align-items: center;
  align-content: center;
  margin-left: 10%;
}
</style>
