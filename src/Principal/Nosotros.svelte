<script>
	import Tratamientos from './Tratamientos.svelte';

</script>

<main>
    <div class="nosotros">
        <img src="img/nosotros.jpg" alt="">
        <div class="texto-superpuesto"><p>Quienes Somos</p></div>
    </div>

    <div class="contenido-facial">
        <div class="imagen">
            <img src="img/facial.jpg" alt="">
        </div>
        <div class="texto">
            <h2>La Clínica Facial</h2>
            <div class="linea-roja"></div>
            <p>La Clínica Facial, está conformada por un grupo de doctores especializados en tratamientos estéticos y dentales, preocupados por el bienestar y la salud de la sociedad Colombiana. Ofrecemos alternativas con tecnología de punta para garantizar la calidad de nuestro servicio.</p>
        </div>
    </div>


    <div class="tratamiento-facial">
        <div class="texto-trata">
            <h2>Atención Para Todos</h2>
            <div class="linea-roja-trata"></div>
            <p>Nuestra clínica de cuidado de la piel trata a cada cliente, hombre o mujer, con la mejor atención.</p>
        </div>
        <div class="imagen-trata">
            <img src="img/Tratamiento-facial.jpg" alt="">
        </div>
    </div>

    <button class="btn agenda">
        <i class="bi bi-whatsapp"></i>
        Cotiza tu Tratamiento
    </button>
</main>

<style>
.nosotros {
        position: relative;
        text-align: center;
    }
    .nosotros img {
        display: block;
        max-width: 100%;
        height: auto;
        width: 100%;
    }
    .texto-superpuesto {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 40px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .contenido-facial{
        display: grid;
    }

/*  ESTILO PARA EL CONTENIDO FACIAL */
.contenido-facial {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-column-gap: 20px; 
    margin: 100px 200px 10px 200px;
}

.imagen {
    grid-column: 1; 
    box-shadow: -13px -13px 5px 0px rgba(0,0,0,0.33);
    -webkit-box-shadow: -13px -13px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: -13px -13px 5px 0px rgba(0,0,0,0.33);
}


.texto {
    margin-top: 50%;
    grid-column: 2; 
    color: black;
}

.linea-roja {
    width: 100px; 
    height: 2px; 
    background-color: #93504A; 
    margin-bottom: 10px; 
}

/* ESTILO DE TRATAMIENTO FACIAL */
.tratamiento-facial {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px; 
    margin: 100px 100px 10px 100px;
}

.texto-trata {
    grid-column: 1; 
    margin-top: 20%;
}

.imagen-trata {
    grid-column: 2;
    box-shadow: -13px -13px 5px 0px rgba(0,0,0,0.33);
    -webkit-box-shadow: -13px -13px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: -13px -13px 5px 0px rgba(0,0,0,0.33); 
    width: 80%;
    height: 80%;
}
.imagen-trata img{
    width: 100%;
    height: 100%;
}

.linea-roja-trata {
    width: 100px; 
    height: 2px; 
    background-color: #93504A; 
    margin-bottom: 10px; 
}

.agenda{
    background-color:#F3D3A4;
    color: white;
    margin-right: 10px;
    margin: 10px 100px 20px 550px;
    padding: 10px 100px 10px 100px;
}

/* Estilos generales para dispositivos móviles */
@media (max-width: 767px) {
    .contenido-facial, .tratamiento-facial {
        display: block;
        margin: 50px 20px; 
    }

    .imagen, .imagen-trata {
        box-shadow: none; 
        margin: auto; 
    }

    .texto, .texto-trata {
        margin-top: 20px; 
        text-align: center; 
    }
    .linea-roja, .linea-roja-trata  {
    width: 200px; 
    height: 2px; 
    background-color: #93504A; 
    margin-bottom: 10px; 
    margin-left: 80px;
}
.agenda{
    margin: 10px 50px 20px 100px;
}
}

</style>