<template>
  <div class="about">
    <p>Acerca de</p>

    <div class="wrapper">
      <div class="pic"></div>
      <p class="header">
        Title
      </p>
      <p class="content">This is a simple example of what a card can look like. it's simpple, elegant, functional and it
        simply does it's job because of this.
        <br /><br /> It can, for example, showcase a certain product, location, or any other thing you wish to sell or
        display.
        <br /><br /> Will this work? YES!<br /> You can make this as long as you want 😁
      </p>
      <a href="#_">
        <div class="button-center">
          <div class="leesmeer"><b>Lees meer </b> <i class="fas fa-angle-right"></i></div>
        </div>
      </a>
    </div>

    <div class="wrapper">
      <div class="pic"></div>
      <p class="header">
        Title
      </p>
      <p class="content">This is a simple example of what a card can look like. it's simpple, elegant, functional and it
        simply does it's job because of this.
        <br /><br /> It can, for example, showcase a certain product, location, or any other thing you wish to sell or
        display.
        <br /><br /> Will this work? YES!<br /> You can make this as long as you want 😁
      </p>
      <a href="#_">
        <div class="readmore"><b>Read more!</b> <i class="fas fa-angle-right"></i></div>
      </a>
    </div>

    
  </div>
</template>
<script lang="ts">
export default {
  name: 'MaterialesView',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Barriecito', cursive;
  text-align: left;
}

h3 {
  font-family: 'Quicksand', sans-serif;
  text-align: left;
  margin-top: -20px;
}

.wrapper {
  border-radius: 5px;
  display: inline-block;
  background: #fff;
  position: relative;
  margin: 0 100px;
  width: 300px;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 10px 25px #999;
}

.pic {
  height: 180px;
  background: url('https://www.filepicker.io/api/file/nsC57aJTOKA3okcoanwS') no-repeat;
  background-size: 400px;
  background-position: center;
  padding: 0 0 20px 0;
  margin-bottom: 35px;
  transition: all 300ms;
}

.wrapper:hover .pic,
.wrapper:focus .pic {
  transform: scale(1.2);
  transition: all 300ms;
}

p.header {
  padding: 0 20px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}

p.content {
  padding: 0 20px;
  font-size: 12px;
  text-align: justify;
}

a .readmore {
  height: 40px;
  width: 100px;
  float: right;
  padding-left: 10px;
  line-height: 40px;
  background-color: #8bc34a;
  margin: 20px;
  font-size: 12px;
  border-radius: 5px;
}

a .readmore:hover {
  background-color: #9fdf55;
}

a .readmore i {
  color: #fff;
  margin-left: 5px;
  transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
}

a .readmore:hover i {
  margin: 0 0 0 20px;
}




.button-center {
  background-color: #8bc34a;
  margin-top: 20px;
}

a .leesmeer {
  height: 40px;
  width: 110px;
  padding-left: 10px;
  line-height: 40px;
  margin: 0 auto;
  font-size: 15px;
  border-radius: 5px;
}

a .button-center:hover {
  background-color: #9fdf55;
}

a .button-center i {
  color: #fff;
  margin-left: 5px;
  transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
}

a .button-center:hover i {
  margin: 0 0 0 20px;
}
</style>