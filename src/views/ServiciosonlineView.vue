<template>
    <div>
       <RequerimientosCultivo></RequerimientosCultivo>
    </div>
</template>
<script lang="ts">
import RequerimientosCultivo from '../components/requerimientosCultivo.vue';
import InfoCultivo from '@/components/infoCultivo.vue';
import ItemRequerimiento from '@/components/itemRequerimiento.vue';
    export default{
    name: "ServiciosonlineView",
    components: {
    RequerimientosCultivo,
}
}
</script>
<style scoped>
</style>