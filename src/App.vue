<template>
  <nav>
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> About </router-link>
    <router-link to="/materiales"> Materiales </router-link>
    <router-link to="/vivero"> Vivero </router-link>
    <router-link to="/establecimiento"> Establecimiento </router-link>
    <router-link to="/MIPE"> MIPE </router-link>
    <router-link to="/nutricion"> Nutricion </router-link>
    <router-link to="/poscosecha"> Poscosecha </router-link>
    <router-link to="/serviciosonline"> Serviciosonline </router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import ViveroView from './views/ViveroView.vue';
import ServiciosonlineView from './views/ServiciosonlineView.vue';
import PoscosechaView from './views/PoscosechaView.vue';
import NutricionView from './views/NutricionView.vue';
import MipeView from './views/MipeView.vue';
import EstablecimientoView from './views/EstablecimientoView.vue';
<<<<<<< HEAD
import Establecimiento from './components/Establecimiento.vue';
=======
import MaterialesView from './views/MaterialesView.vue';
import AboutView from './views/AboutView.vue';
>>>>>>> f0b3bd5924eea757811019c01fdf9e4f8035ee76

export default{
  name:'App',
  ViveroView,
  ServiciosonlineView,
  PoscosechaView,
  NutricionView,
  MipeView,
  EstablecimientoView,
<<<<<<< HEAD
  Establecimiento,
=======
  MaterialesView
>>>>>>> f0b3bd5924eea757811019c01fdf9e4f8035ee76
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/*REST*/
*{
margin:0;
padding:0;
font-family: verdana, Geneva, Tahoma, sans-serif;
}
.menu a{
    color: rgb(227, 229, 241);
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 10px;
    /*transition: 0.4s; */
    font-size: 30px;
}
.mostrar-menu,
.esconder-menu{
    font-size: 30px;
    cursor: pointer;
    display: none;
    transition: 0.4s;
}
.mostrar-menu{
    order: 1;
}

.menu a:hover,
.mostrar-menu:hover,
.esconder-menu:hover{
    background: #6cc091;
}

#check{
    display:none;
}
/*RESPONSIVE*/
@media(max-width: 768px){
    /* HEADER */
    .mostrar-menu,
    .esconder-menu{
        display:block;
    }

    .menu{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: rgba(127, 133, 127, 0.867);
        right: -100%;
        top: 0;
        text-align: center;
        padding: 100px 0px;
        z-index:100;
        transition: 0.8s;
    }
    .menu a{
        display: block;
        padding: 20px;
    }
    .esconder-menu{
        position: absolute;
        top: 40px;
        right: 40px;
   }
   #check:checked ~ .menu{
    right: 0;
   }
/*INFORMACION*/
#informacion{
    flex-direction:column;
}
}
@media(min-width: 768px){
    
}
</style>
