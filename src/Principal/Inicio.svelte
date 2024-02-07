<script>

</script>

<main>
<!-- derecha -->
<div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
            <img src="img/toxi.png" class="img-fluid rounded-start img" alt="...">
        </div>
        <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
            <div class="card-body">
                <h5 class="card-title"><strong>Toxina Botulínica</strong></h5>
                <p class="card-text">Nuestro tratamiento con botox es una opción segura y efectiva para suavizar las arrugas y líneas de expresion, brindándote un aspecto más juvenil y fresco.</p>
            </div>
            <div class="btn-trata">
                <button class="btn btn-tra ">
                  <i class="bi bi-whatsapp"></i>
                  Cotiza tu Tratamiento
                </button>
            </div>
        </div>
    </div>
</div>
<!-- izquierda -->
<div class="card mb-3" >
    <div class="row g-0">
        <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
            <img src="img/toxi.png" class="img-fluid rounded-start img" alt="...">
        </div>
        <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
            <div class="card-body">
                <h5 class="card-title"><strong>¿Qué es la Toxina Botulínica?</strong></h5>
                <p class="card-text">La Toxina Botulínica es una proteína que relaja temporalmente los músculos responsables de las arrugas dinámicas.</p>
                <p>Al bloquear las señales nerviosas que provocan la contracción muscular, logramos suavisar las líneas y arrugas, brindándote un aspecto más
                    juvenil y descansado.
                </p>
                <p>La toxina botulínica debe ser administrada por profecionales médicos calificados para garantizar la seguridad 
                    y eficacia del traatamiento. Admás, los resultados son temporales y generalmente duran varios meses, por lo que 
                    pueden requerirse tratamientos de seguimiento para mantener los beneficios.
                </p>
            </div>
            <div class="btn-trata">
                <button class="btn btn-tra ">
                  <i class="bi bi-whatsapp"></i>
                  Cotiza tu Tratamiento
                </button>
            </div>
        </div>
    </div>
</div>

<!-- DIV DE BENEFICIOS -->
<div>
    <img src="img/beneficios.png" alt="">
</div>

<!-- ANUNCIO DE COTIZACION -->
<div class="cotiza">
    <h2>¡REJUVENECE TU ROSTRO HOY!</h2>
    <div class="btn-coti">
        <button class="btn btn-cot ">
            <i class="bi bi-whatsapp"></i>
            Cotiza tu Tratamiento
        </button>
    </div>
</div>

<!-- DIV DE LAS PREGUNTAS -->
<div class="preguntas">
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                <img src="img/pregunta.png" class="img-fluid rounded-start img-pregunta" alt="...">
            </div>
            <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                <div class="card-body">
                    <h5 class="card-title"><strong>Preguntas frecuentes Sobre La Toxina botulínica</strong></h5>
                    <p class="card-text"><i class="bi bi-plus-lg"></i>¿Cuánto tiempo dura el proceso de colocación de toxina botulínica?</p>
                    <p class="card-text"><i class="bi bi-plus-lg"></i>¿El procedimiento de colocación de toxina botulíca es doloroso?</p>
                    <p class="card-text"><i class="bi bi-plus-lg"></i>¿Cuáles son los beneficios de la toxina botulíca en comparación con otros procedimientos?</p>
                    <p class="card-text"><i class="bi bi-plus-lg"></i>¿Quién es un candidato adecuado para toxina botulíca?</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- DIV DE CONTACTOS -->
<div class="contactos">
    <img src="img/contactos.png" alt="">
</div>
</main>

<style>
.btn-tra{
    background-color:#F3D3A4;
    color: white;
    margin-left: 20px;
    margin-top: 20px;
}
/* ESTILOS DE LA SECCION DE COTIZAR */
.cotiza{
    display: grid;
    grid-template-columns: auto auto;
    background-color:#F3D3A4;
    padding-top: 40px;
    padding-bottom: 40px;
}
.cotiza h2{
    margin-left: 200px;
    color: white;
}
.btn-coti{
    display: flex;
    align-items: center ;
}
.btn-cot{
background-color: #424242;
color: white;
padding-left: 100px;
padding-right: 100px;
}

/* ESTILOS DE PREGUNTAS */
.card-body{
    margin-left: 100px;
}
.img-pregunta{
    width: 90%;
}
.bi-plus-lg{
color:#F3D3A4;
font-size: 30px;
}


.img{
    width: 50%;
    height: auto;
}
img{
    width: 100%;
}
</style>