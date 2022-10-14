<template>
    <section id="informacion" class="seccion1">

        <div class="seccion2">
            <div class="asociados">
                <div class="img">
                        <img src="../assets/logoaguacate.png" alt="" style= 'height="300px" width="200px"'/>
                </div>
                <div class="info">
                    <h4>AVOCADO WORLD</h4>
                    <P>Avocado World es una página que te ayudará a mejorar el nivel de tecnificación en tus procesos productivos</P>
                    <a href="#" class="boton-saber-mas">Saber Más</a>
                </div>
            </div>
            <div class="quienessomos">
                <div class="info">
                    <h5>QUIENES SOMOS</h5>
                    <P>Somos una empresa que ha pensado en el bienestar de los campesinos y agricultores con tan solo un click.
                    Esta es una herramienta tecnológica que permite calcular qué porcentajes y/o cantidades de fertilizantes necesitas para tus
                    cultivos. Así mismo realizamos el análisis de los suelos para preveer que las condiciones son óptimas, garantizando mejores resultados.</P>
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
    background-color: #e3e3e3;
    opacity: 1;
    background-image: radial-gradient(#fcfcfc 1px, transparent 1px), radial-gradient(#fcfcfc 1px, #e3e3e3 1px);
    background-size: 40px 40px;
    background-position: 0 0, 20px 20px;
    padding: 1em;
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
    100% {
        opacity: 1;
    }
}
</style>