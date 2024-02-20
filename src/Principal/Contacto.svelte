<script>

</script>

<main>
    <div class="principio">
        <img src="img/Contactanos.jpg" alt="">
        <div class="texto-superpuesto">Contáctanos</div>
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

.principio img{
width: 100%;
}

.principio {
        position: relative;
        text-align: center;
    }
    .principio img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .texto-superpuesto {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
/* ESTILOS PARA EL FORMS Y EL MAPA  */
.map-forms {
  display: flex;
  margin-left: 35px;
  padding: 15px 250px 15px 250px;
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
@media (max-width: 768px) {
    .map-forms {
  display: flex;
  margin-left: 35px;
  padding: 15px 3px 15px 3px;
}
.enviar{
    margin-left: 40%;
}
}
</style>