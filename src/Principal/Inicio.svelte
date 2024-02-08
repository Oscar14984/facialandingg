<script>
	import Mapa from './../Componentes/Mapa.svelte';
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
 <!-- Mapa -->
 <div class="map-forms">
    <div class="forms">
      <h1>Contáctanos para Cotizar tu Tratamiento</h1>
      <div class="contacto">
        <div class="inputs">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre">
          </div>
          <div class="mb-3">
            <label for="correo" class="form-label">Correo</label>
            <input type="email" class="form-control" id="telefono">
          </div>
        </div>
        <div class="mb-3">
            <label for="correo" class="form-label">Tratamiento de interes</label>
            <select class="form-select" aria-label="Default select example" aria-invalid="false" name="Tratamiento">
                <option value="-">-</option>
                <option value="Revitalización facial con Plasma Rico en Factores de Crecimiento">Revitalización facial con Plasma Rico en Factores de Crecimiento</option>
                <option value="Hidratación profunda con ácido Hialurónico">Hidratación profunda con ácido Hialurónico</option>
                <option value="Toxina botulínica">Toxina botulínica</option>
                <option value="Rellenos faciales">Rellenos faciales</option>
                <option value="Modelado facial con ácido hialurónico">Modelado facial con ácido hialurónico</option>
                <option value="Rellenos labiales">Rellenos labiales</option>
                <option value="Microneedeling con plasma rico en factores de crecimiento">Microneedeling con plasma rico en factores de crecimiento</option>
                <option value="Microneedeling con Ácido hialurónico">Microneedeling con Ácido hialurónico</option>
                <option value="Lipoescultura cervical">Lipoescultura cervical</option>
                <option value="Bichectomías">Bichectomías</option>
                <option value="Nano needle">Nano needle</option>
                <option value="Diseño de sonrisas *">Diseño de sonrisas *</option>
                <option value="Blanqueamiento dental *">Blanqueamiento dental *</option>
                <option value="Carillas dentales *">Carillas dentales *</option>
                <option value="Ortodoncias Invisalign *">Ortodoncias Invisalign *</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="correo" class="form-label">Fecha</label>
            <input type="date" class="form-control" >
        </div>
        <div class="mb-3">
            <label for="correo" class="form-label">Horario</label>
            <select class="form-select" aria-invalid="false" name="Horario">
                <option value="En la mañana">En la mañana</option>
                <option value="En la tarde">En la tarde</option>
            </select>
        </div>
        <div class="mb-3">
          <label for="mensaje" class="form-label">consulta</label>
          <textarea class="form-control" id="mensaje" rows="3"></textarea>
        </div>
      </div>
      <button class="btn btn-success">Enviar</button>
    </div>
    <div id="map">
      <Mapa />
    </div>
  </div>
</main>

<style>
.btn-tra{
    background-color:#F3D3A4;
    color: white;
    margin-left: 100px;
    margin-top: 40px;
}
.img{
    width: 65%;
    height: auto;
}
img{
    width: 100%;
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

/* ESTILOS PARA EL FORMS Y EL MAPA  */
.map-forms {
  display: flex;
  margin-left: 35px;
}
.map-forms h1{
  margin-left: 20px;
  border-bottom: #F3D3A4 2px solid;
}

.forms {
  flex: 1; 
}

#map {
  flex: 1; 
}
.forms {
  flex: 1;
  padding-right: 20px; 
}

.contacto {
  background-color: #f8f9fa; 
  padding: 20px;
  border-radius: 10px; 
}

.form-label {
  font-weight: bold; 
}

.form-control {
  width: 100%; 
  margin-bottom: 10px; 
}

textarea.form-control {
  resize: vertical; 
}

.inputs {
  display: flex;
  justify-content: space-between;
}


/* mapa */
#map { height: 500px; }

@media screen and (max-width: 767px) {
  .map-forms {
    flex-direction: column;
    margin-left: 0;
  }
  .map-forms h1 {
    margin-left: 0;
    width: auto;
    text-align: center;
  }
 
  .forms {
    padding-right: 0;
  }
  .contacto {
    border-radius: 0; 
  }
  .form-control {
    width: calc(100% - 20px); 
  }
  .inputs {
    flex-direction: column; 
  }
  
}
</style>