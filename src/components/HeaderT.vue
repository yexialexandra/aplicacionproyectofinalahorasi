<template>
    <div class="hello">
    <header>
        <h2 class="logo">ASOHASSPEN</h2>
        <input type="checkbox" id="check"> 
        <label for="check" class="mostrar-menu">

        </label>
        <nav class="menu">
            <a href="#">Inicio</a>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Blog</a>
            <label for="check" class="esconder-menu">
            </label>
        </nav>
    </header>
    <section id="banner">
        <div class="contenido-banner">
            <h3>CADA PRODUCTO TIENE SU ORIGEN, Y CADA ORIGEN TIENE SU HISTORIA</h3>
            <a href="#" class="boton-empezar">EMPEZAR</a>
        </div> 
    </section>
    <section id="informacion">
        <div class= "asociados"> 
            <img src="../assets/asociados.jpg" alt="joda">
            <h4>ASOCIADOS</h4>
            <P>Asohasspen cuenta con 43 socios activos alrededor de la vereda La Estrella.</P>
            <a href="#" class="boton-saber-mas">Saber Más</a>
        </div>
        <div class="quienessomos">
            <img src="../assets/quienessomos.jpg" alt="joda2">
            <h5>QUIENES SOMOS</h5>
            <P>Es una estrategia de desarrollo Rural con identidad Territorial que fue diseñada por la Secretaria de Agricultura del Departamento de Caldas para impulsar y dinamizar la comercialización de los productos del sector agropecuario y agroindustrial, esta estrategia resalta la procedencia, saber cultural  la naturalidad, la calidad, la innocuidad, la sanidad e innovación de los diferentes productos, con el propósito de impulsar el crecimiento socioeconómico del departamento, buscando así posicionar los productos en mercados  especializados y formados del orden local regional, nacional e internacional. La estrategia Origen Caldas, reconoce con su sello la producción con altos estándares de calidad y buenas prácticas de manufactura..</P>
            <a href="#" class="boton-saber-mas">Saber Más</a>
        </div>
    </section>   
</div> 
</template>
<script lang="ts">
export default{
    name:'HeaderT',
    props:{
        msg:String
    }
}
</script>
<style scoped>
/*HEADER*/
header{
    height: 100px;
    background-color: darkgreen;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
}
.logo{
    text-transform: uppercase;
    color: #6cc091;
    font-weight: 200;
}
</style>
