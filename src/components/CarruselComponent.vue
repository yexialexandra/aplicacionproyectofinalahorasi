<template>
  <div class="carrusel12">
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
      <div class="carousel-inner">
          <div class="carousel-item active">
          <img src="../assets/cultivos.jpg" class="d-block w-100" alt="...">
          <h1>Lorem ipsum 1</h1>
          </div>       
           <div class="carousel-item active">
          <img src="../assets/semilla.jpg" class="d-block w-100" alt="...">
          <h1>Cómo germinar y plantar una semilla de aguacate
Sacamos la pepita o hueso del aguacate.
La limpiamos.
Tenemos que introducir la mitad de la pepita o hueso en agua por lo que le ponemos tres palillos clavados en la mitad.
Llenamos un vaso de agua, no demasiado hondo, no es necesario.
Colocamos la pepita o hueso con los palillos clavados.
Ponemos más agua si es necesario hasta cubrir la mitad de la pepita.
Esperaremos a que salga la raíz, suele tardar unas 3 – 4 semanas.
Cuando la raíz alcance unos 10 cm, sacaremos la pepita del agua.
Le quitamos los palillos.
Preparamos una maceta no muy grande con tierra.
Plantamos  y regamos la pepita. La colocaremos de tal forma que la mitad de ella esté dentro de la tierra y la otra mitad fuera.
En poco más de un mes comenzaran a salirte hojas.</h1>
          </div>
          <div class="carousel-item active">
          <img src="../assets/vivero.png" class="d-block w-100" alt="...">
          <h1>Se recomienda para el establecimiento de un huerto comercial unas condiciones pre-determinadas de, suelo, clima, variedad a injertar, tolerancia a ataque de plagas y enfermedades, tamaño, forma y calidad de fruto.</h1>
          </div>
          <div class="carousel-item active">
          <img src="../assets/terreno.png" class="d-block w-100" alt="...">
          <h1>La selección del terreno al inicio de una plantación de aguacate es una de las tareas esenciales para una exitosa producción de aguacates. Para ello es esencial realizar un análisis físico y químico del suelo. Para saber si este cumple los requerimientos mínimos para el cultivo del aguacate. A su vez es muy importante realizar un análisis del agua.

Por un lado, los suelos con altos contenidos en arcilla alrededor del 20-25% no son recomendables para sembrar aguacate. Debido a que genera encharcamientos del terreno produciendo enfermedades en la raíz del árbol tanto fisiológicas como la asfixia radical y fúngicas como fitoptora.</h1>
          </div>
          <div class="carousel-item active">
          <img src="../assets/espacio.png" class="d-block w-100" alt="...">
          <h1>La distancia ideal para la siembra debe ser de 5 X 5,30 metros. En una hectárea sumarían de 350 a 400 plantas.</h1>
          </div>
          <div class="carousel-item active">
          <img src="../assets/monitoreo.png" class="d-block w-100" alt="...">
          <h1>Lorem ipsum 1</h1>
          </div>
          <div class="carousel-item active">
          <img src="../assets/poda.png" class="d-block w-100" alt="...">
          <h1>Lorem ipsum 1</h1>
          </div>
          <div class="carousel-item active">
          <img src="../assets/recoleccion.png" class="d-block w-100" alt="...">
          <h1>Lorem ipsum 1</h1>
          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</template>
<script lang="ts">
export default{
    name: 'CarruselComponent',
}
</script>

<script lang="ts">

</script>

<style scoped>
.carrusel12{
  width:90%;
  margin: auto;
  margin-bottom: 80px;
  }
  .carrusel12 img{
    border-radius: 15% ;

   }
h1{
  border: 2px solid blue;

  }

</style>