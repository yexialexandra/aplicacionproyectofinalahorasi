<script lang="ts">
import {ref, reactive, computed, watch} from "vue";
import {store} from '../store/store'

export default{
    setup() {
            return {
                store,
            }
        },
    name: 'ItemRequerimiento',
}
</script>
<template>
    <div class="itemRequerimiento" v-for="item in store.requerimientos" :key="item.key" :info="item">
        <label>{{item.label}}</label><br/>
        <input v-if="item.type === 'text'" type="text" v-model="item.value"/>
        <select v-else-if="item.type === 'select'" v-model="item.value">
            <option>-- seleccione --</option>
            <option v-for="info in item.options" :key="info.label" :value="info.value">
            {{info.label}}
            </option>
        </select>
    </div>
  </template>
  <style scoped>
  </style>