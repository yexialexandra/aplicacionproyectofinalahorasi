<template>
  <nav>
    <router-link to="/"> Inicio </router-link>
    <router-link to="/about"> Producción </router-link>
    <router-link to="/serviciosonline"> Servicios Online </router-link>
    <router-link to="/establecimiento"> Iniciar sesion </router-link>
  </nav>
  <router-view />
  <div class="classfooter">
    <ComFooter />
  </div>
</template>
<script lang="ts">
import ComFooter from '../src/components/ComFooter.vue'

export default {
  name: 'App',
  components: {
    ComFooter
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  padding: 30px;
  background-color: rgb(32, 128, 173);
}
nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  width: 10%;
  transition: all 300ms;
}
nav a:hover {
  color: rgb(104, 234, 124);
  transition: all 300ms;
}
nav a.router-link-exact-active {
  color: rgb(104, 234, 124);
  border-bottom: 1px solid rgb(104, 234, 124);
  transition: all 300ms;
}
/*REST*/
* {
  margin: 0;
  padding: 0;
  /* font-family: 'M PLUS Rounded 1c', sans-serif; */
  font-family: 'Comfortaa', cursive;
}
.menu a {
  color: rgb(1, 38, 1);
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 10px;
  /*transition: 0.4s; */
  font-size: 30px;
}
.mostrar-menu,
.esconder-menu {
  font-size: 30px;
  cursor: pointer;
  display: none;
  transition: 0.4s;
}
.mostrar-menu {
  order: 1;
}
.menu a:hover,
.mostrar-menu:hover,
.esconder-menu:hover {
  background: #82d8a7;
}
#check {
  display: none;
}
/*RESPONSIVE*/
@media(max-width: 768px) {
  /* HEADER */
  .mostrar-menu,
  .esconder-menu {
    display: block;
  }
  .menu {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(127, 133, 127, 0.867);
    right: -100%;
    top: 0;
    text-align: center;
    padding: 100px 0px;
    z-index: 100;
    transition: 0.8s;
  }
  .menu a {
    display: block;
    padding: 20px;
  }
  .esconder-menu {
    position: absolute;
    top: 40px;
    right: 40px;
  }
  #check:checked~.menu {
    right: 0;
  }
  .classfooter {
    margin-top: 0%;
  }
  /*INFORMACION*/
  #informacion {
    flex-direction: column;
  }
}
@media(min-width: 768px) {}
</style>