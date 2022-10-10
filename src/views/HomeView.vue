<template>
    <section id="informacion" class="seccion1">
    <div class="fff">
        <CarruselComponent/>
    </div>
    <div class="seccion2">
        <div class= "asociados"> 
            <img src="../assets/asociados.jpg" alt="">
            <h4>ASOCIADOS</h4>
            <P>Asohasspen cuenta con 43 socios activos alrededor de la vereda La Estrella.</P>
            <a href="#" class="boton-saber-mas">Saber Más</a>
        </div>
        <div class="quienessomos">
            <img src="../assets/quienessomos.jpg" alt="">
            <h5>QUIENES SOMOS</h5>
            <P>Es una estrategia de desarrollo Rural con identidad Territorial que fue diseñada por la Secretaria de Agricultura del Departamento de Caldas para impulsar y dinamizar la comercialización de los productos del sector agropecuario y agroindustrial, esta estrategia resalta la procedencia, saber cultural  la naturalidad, la calidad, la innocuidad, la sanidad e innovación de los diferentes productos, con el propósito de impulsar el crecimiento socioeconómico del departamento, buscando así posicionar los productos en mercados  especializados y formados del orden local regional, nacional e internacional. La estrategia Origen Caldas, reconoce con su sello la producción con altos estándares de calidad y buenas prácticas de manufactura..</P>
            <a href="#" class="boton-saber-mas">Saber Más</a>
        </div>
    </div>
    </section>    
</template>

<script lang="ts">
    import CarruselComponent from "@/components/CarruselComponent.vue";

    export default{
        components:{
            CarruselComponent
        }
    }
</script>

<style scoped>

.seccion1{
    height: 100px;
}
.seccion2{
    width: 90%;
    display:flex;

}

.asociados{
    width:50%;
    
}

.quienessomos{
    width:50%;

}

.asociados img{
    width:90px;
}

.quienessomos img{
    width:90px;
}

</style>
