<script lang="ts">
import {ref, reactive, computed, watch} from "vue";

export default{
    name: 'ItemRequerimiento',
    props:{
        info: Object
    }
}
</script>
<template>
    <div class="itemRequerimiento">
        <label>{{info?.label}}</label><br/>
        <input v-if="info?.type === 'text'" type="text" :value="info.value"/>
            <select v-else-if="info?.type === 'select'" :value="info?.value">
                <option>-- seleccione --</option>
                <option v-for="item in info.options" :key="item.label" :value="item.key">
                {{item.label}}
                </option>
        </select>
    </div>
  </template>
  <style scoped>
  </style>