<template>
    <section id="informacion" class="seccion1">

        <div class="seccion2">
            <div class="asociados">
                <div class="img">
                    <img class="asociados-img"
                        src="http://fronterra.com.mx/fronterra/wp-content/uploads/2018/04/vision.png" alt="">
                </div>
                <div class="info">
                    <h4>ASOCIADOS</h4>
                    <P>Asohasspen cuenta con 43 socios activos<br> alrededor de la vereda La Estrella.</P>
                    <a href="#" class="boton-saber-mas">Saber Más</a>
                </div>
            </div>
            <div class="quienessomos">
                <div class="info">
                    <h5>QUIENES SOMOS</h5>
                    <P>Es una estrategia de desarrollo Rural con identidad Territorial que fue diseñada por la
                        Secretaria de Agricultura del Departamento de Caldas para impulsar y dinamizar la
                        comercialización de los productos del sector agropecuario y agroindustrial, esta estrategia
                        resalta la procedencia, saber cultural la naturalidad, la calidad, la innocuidad, la sanidad e
                        innovación de los diferentes productos, con el propósito de impulsar el crecimiento
                        socioeconómico del departamento, buscando así posicionar los productos en mercados
                        especializados y formados del orden local regional, nacional e internacional. La estrategia
                        Origen Caldas, reconoce con su sello la producción con altos estándares de calidad y buenas
                        prácticas de manufactura..</P>
                    <a href="#" class="boton-saber-mas">Saber Más</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">

export default {
    components: {
    }
}
</script>

<style scoped>
.seccion2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(226, 226, 226);

}

.asociados {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2em;
    width: 90%;
    padding: 2em;
    border-radius: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 24px;
    transition: 300ms all;
    background-color: rgb(246, 246, 246);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.asociados h4 {
    font-size: 45px;
}

.asociados:hover {
    transform: translateY(-10px);
    transition: 300ms all;
}

.asociados-img {
    width: 50px;
}

.quienessomos {
    display: flex;
    transition: 300ms all;
    background-color: rgb(32, 128, 173);
    color: white;
    width: 90%;
    margin-top: 10px;
    padding: 2em;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

}

.asociados img {
    width: 300px;
    border-radius: 30px;
}

.quienessomos:hover {
    transform: translateY(-10px);
    transition: 300ms all;
}

.quienessomos a {
    background-color: rgb(34, 174, 50);
    color: white;
    padding: 0.5em;
    border-radius: 15px;
    text-decoration: none;
}

.quienessomos a:hover {
    background-color: rgb(49, 187, 70);
    transition: all 300ms;

}

.asociados a {
    background-color: rgb(44, 140, 55);
    color: white;
    padding: 0.5em;
    border-radius: 15px;
    text-decoration: none;
    transition: all 300ms;
}

.asociados a:hover {
    background-color: rgb(49, 187, 70);
    transition: all 300ms;

}

.quienessomos img {
    width: 90px;
}

.seccion1 {
    animation-name: fade;
    animation-duration: 1s;

}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

}
</style>
