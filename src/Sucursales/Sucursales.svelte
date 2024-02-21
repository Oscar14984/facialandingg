<script>
import {link} from 'svelte-spa-router'
const abrirMapaPolanco = () =>{
  window.open("https://maps.app.goo.gl/3zkeePZWpBm99c6U6" , "_blank");
}
const abrirMapaRoma = () =>{
  window.open("https://maps.app.goo.gl/wpYU5mBXp6XTELgb9", "_blank")
}
</script>

<main>
    <div class="sucursal">
        <div class="polanco">
            <p>Sucursal La Clínica Dental Polanco</p>
            <div class="map-link">
                <button class="btn btn-success btn-mapa" on:click={abrirMapaPolanco}>Ver en el mapa</button>
            </div>
        </div>
        <div class="roma">
            <p>Sucursal La Clínica Dental Roma</p>
            <div class="map-link">
                <button class="btn btn-success btn-mapa" on:click={abrirMapaRoma}>Ver en el mapa</button>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3">
                <img src="img-sucursales/IMG_4540.png" alt="" class="img-fluid">
            </div>
            <div class="col-6 col-md-4 col-lg-3">
                <img src="img-sucursales/IMG_4541.png" alt="" class="img-fluid">
            </div>
            <div class="col-6 col-md-4 col-lg-3">
                <img src="img-sucursales/IMG_4542.png" alt="" class="img-fluid">
            </div>
            <div class="col-6 col-md-4 col-lg-3">
                <img src="img-sucursales/IMG_4543.png" alt="" class="img-fluid">
            </div>
        </div>
    </div>
    
    <div class="contacto">
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
              <button class="btn btn-success enviar">Enviar</button>
            </div>
    </div>
</main>

<style>
  /* ESTOLOS DE LOS BOTONES PARA VER MAPA */
  .btn-mapa{
    color: white;
  }
  .btn-mapa:hover{
    color: black;
  }

/* ESTILO DEL CONTAINER */
img{
    width: 100%;
}
.container{
    margin-left: 8%;
}
@media (max-width:768px){
    .container {
      margin-left: 0%;
   }
}
/* ESTILLOS DE LAS SUCURSALES */
.sucursal {
        display: flex;
        justify-content: space-around;
        margin-top: 10%;
        margin-bottom: 5%;
    }
    .sucursal div {
        background-color: #f0f0f0;
        border-radius: 8px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .sucursal p {
        margin-bottom: 0;
    }
    .map-link {
        margin-top: 20px;
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
.enviar{
    margin-left: 50%;
}
/* .grid-container{
        display: grid;
        grid-template-areas: 
        "a a b c"
        "d d d d"
        "f g e e";
        gap: 1rem;
    } */

    /* .img1 { grid-area: a; border: 1px solid black; background-color: rgba(255, 192, 203, 0.3); width: 100%;}
    .img2 { grid-area: b; border: 1px solid black; background-color: rgba(255, 192, 203, 0.3); width: 100%;}
    .img3 { grid-area: c; border: 1px solid black; width: 100%;}
    .contacto{ grid-area: d; border: 1px solid black; width: 100%; }
    .img5{ grid-area: e; border: 1px solid black; width: 100%;}
    .img6 { grid-area: f; border: 1px solid black;}
    .img7 { grid-area: g; border: 1px solid black;} */
</style>