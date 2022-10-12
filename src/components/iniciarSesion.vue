<template>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/>
      <div class="container">
	<div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
				<p>Bienvenido</p>
			</h2>
		</div>
		<form class="card-form">
			<div class="input">
                <label class="input-label">Nombre completo</label>
				<input type="text" class="input-field" value="" required/>
			</div>
						<div class="input">
                <label class="input-label">Email</label>
				<input type="text" class="input-field" value="" required/>
			</div>
						<div class="input">
                <label class="input-label">Contraseña</label>
				<input type="password" class="input-field" required/>
			</div>
			<div class="action">
				<button class="action-button">Empecemos</button>
			</div>
		</form>
		<div class="card-info">
			<p>Si no está registrado puede hacerlo aquí <a href="#">Registrarse</a></p>
		</div>
	</div>
</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

*, *:after, *:before {
	box-sizing: border-box;
}

.container {
	font-family: "DM Sans", sans-serif;
	line-height: 1.5;
	background-color: #fdfdfd;
	padding: 2rem;
    width: 100%;
}

img {
	max-width: 100%;
	display: block;
}

input {
	appearance: none;
	border-radius: 0;
}

.card {
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 425px;
	background-color: rgb(243, 251, 255);
	border-radius: 10px;
	box-shadow: 0 10px 20px 0 rgba(rgb(68, 80, 1), .25);
	padding: .75rem;
    border: 2px solid rgb(168, 217, 240);
}

.card-image {
	border-radius: 8px;
	overflow: hidden;
	padding-bottom: 65%;
	background-image:url(../assets/aguacate-HASS.jpg);
    background-repeat: no-repeat;
	background-size: 120%;
	background-position: 0 5%;
    border: 2px solid rgb(130, 205, 240);
	position: relative;
}

.card-heading {
	position: absolute;
	left: 10%;
	top: 15%;
	right: 10%;
	font-size: 1.75rem;
	font-weight: 700;
	color: rgb(32, 128, 173);
	line-height: 1.222;
}

.card-form {
	padding: 2rem 1rem 0;
}

.input {
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	padding-top: 1.5rem;
}

.input-label {
	color: #033f0e;
	position: absolute;
	top: 1.5rem;
	transition: .25s ease;
}

.input-field {
	border: 0;
	z-index: 1;
	background-color: transparent;
    border-bottom: 2px solid rgb(133, 208, 243);
	font: inherit;
	font-size: 1.125rem;
	padding: .25rem 0;
}

.action {
	margin-top: 2rem;
}

.action-button {
	font: inherit;
	font-size: 1.25rem;
	padding: 1em;
	width: 100%;
	font-weight: 500;
	background-color: rgb(32, 128, 173);
	border-radius: 6px;
	color: #FFF;
	border: 0;
}

.card-info {
	padding: 1rem 1rem;
	text-align: center;
	font-size: .875rem;
	color: #8597a3;
}



</style>
<script lang="ts">
    export default{
        name: 'iniciarSesion',
    }
  </script>