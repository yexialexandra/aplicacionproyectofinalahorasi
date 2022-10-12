<template>
  <div class="carrusel12">
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
      <div class="carousel-inner">
          <div class="carousel-item active">
          <img src="../assets/cultivos.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item active">
          <img src="../assets/quienessomos.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
          <img src="../assets/nutricion.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
          <img src="../assets/terreno.jpg" class="d-block w-100" alt="...">
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
</style>