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
/* BANNER */
#banner{
    padding: 0 50px;
    background-image: url(./assets/BannerAguacate.jpg);
    height: 45vh;
    background-size: cover;
    background-position: center;
}
#banner::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 45vh;
    left: 0;
}
.contenido-banner{
    position: relative;
    color:rgb(59, 57, 57);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contenido-banner h3{
    font-size: 30px;
    font-weight: 400;
    padding: 10px 0px;
}
.contenido-banner h3 span{
    font-weight: 600;
}
.contenido-banner p{
    text-align: right;
    font-size: 50px;
    color:#4D4D5c;
}

.boton-empezar{
    text-decoration: none;
    color:#fff;
    border: 1px solid #6cc091;
    padding: 20px 40px;
    align-self: baseline;
    transition: all 0.45;
}
.boton-empezar:hover{
    background: #6cc09070;
}

/* INFORMACION*/
#informacion{
    padding: 20px 20px;
    display: flex;
    justify-content: center;
    text-align: center;
}
#informacion img{
    border-radius: 100%;
    width: 150px;
    height: 150px;
}
.asociados{
    width: 60%;

}
.quienessomos{
    padding: 30px 30px;
    width: 40%;
}
#informacion div h4{
    color: #4D4D5c;
    font-size: 20px;
    margin: 15px 0px;
}
#informacion div h5{
    color: #4D4D5c;
    font-size: 20px;
    margin: 15px 0px;
}
#informacion div p{
    color: #4d4d5c87;
    font-size: 18px;
}
.boton-saber-mas{
   display: inline-block;
   text-decoration: none;
   color: #6cc091;
   padding: 10px 30px;
   border: 3px solid #6cc091;
   border-radius: 30px;
   margin-top: 15px;
   transition: all 0.4s;
}
.boton-abr-mas:hover{
    background: #6cc091;
    color:#fff;
}
@media (max-width: 768px){
    #informacion {
    flex-direction: column;
}
}
</style>