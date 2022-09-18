<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png">
    <HelloWorld msg="aguacate y su siembra"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
