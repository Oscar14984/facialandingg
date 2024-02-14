<script>
import BannerPrincipal from "../Carruseles/BannerPrincipal.svelte";
</script>

<main>
<BannerPrincipal />
<!--  Contenido principal -->
<div class="tratamientos-dentales">
    <h2>Tratamientos Dentales y Faciales</h2>
    <p>Durante el envejecimiento se va perdiendo volumen en el rostro, y la piel se adelgaza, lo que da un aspecto seco, flácido y arrugado. Existen tratamientos que ayudan a dar soporte e hidratación a tu piel, contrarrestando las arrugas para lucir un rostro más joven, luminoso, hidratado y con mayor vitalidad. Los tratamientos faciales que ofrecemos son una excelente opción para combatir los signos de la edad, son mínimamente invasivos y muy efectivos.</p>
</div>

    <div class="container mt-4">
        <div class="row">
            <!-- Columna de la izquierda -->
            <div class="col-6 "> 
                <p>En los últimos años se ha normalizado la realización de tratamientos de estética facial en hombres, pasando de ser un tema «tabú» a una opción habitual entre el género masculino.</p>
            </div>
            <!-- Columna de la derecha -->
            <div class="col-6 ">
                <p>En la Clínica Facial contamos con tratamientos dentales y faciales específicos para el hombres y la mujer, ya sea para eliminar imperfecciones de la piel como para reducir el impacto del envejecimiento en el rostro.</p>
            </div>
        </div>
     </div>   
<!-- DIV DE TRATAMIENTOS FACIALES -->
<div class="tratamientos-faciales">
    <h2>tratamientos Facilaes Revitalización de rostro</h2>
    <p>La salud y la seguridad de nuestros clientes siempre ha sido nuestra prioridad número uno y continúa estando a la vanguardia en nuestra mente, ofreciendo a los pacientes algunos de los tratamientos faciales y soluciones para el cuidado de la piel más efectivos y avanzados. Combinar la mejor tecnología con un increíble cuidado de la piel es la forma segura de obtener resultados espectaculares, y esta ha sido nuestra fórmula para el éxito durante.</p>
</div>

<!-- DIV DE CONTACTO -->
<div class="contacto">
    <div class="contacto-contenido">
        <p><strong>¿Tienes alguna pregunta? ¿Necesitas una cita? ¡No dudes en contactarnos!</strong></p>
        <a href="/Contactanos" class="btn btn-success">¡Contáctanos!</a>
    </div>
</div>

<!-- DIV DE DISEÑO DE SONRISA -->
<div class="diseño-sonrisas">
    <h2>Diseño de Sonrisas:</h2>
    <!-- <img src="img/diseño-sonrisas.png" alt="Proceso de diseño de sonrisa" width=10% height=auto/> -->
    <p>El diseño de la sonrisa es cada vez más importante debido al aumento de pacientes conscientes de la estética. Los pacientes buscan un resultado más natural que se ajuste a su armonía facial y adecuado a su edad, sexo y personalidad al realizar la odontología cosmética. Esto se puede lograr mediante leves rotaciones de los dientes, la translucidez natural o la diferencia de color sobre la superficie del diente, o una textura más caracterizada en la superficie de la cerámica.</p>
    <p>Las hermosas sonrisas ya no se dejan al azar, ya que la tecnología digital se combina con el diseño para crear resultados sorprendentes para los pacientes.</p>
    <p>Conoce los diferentes tipos de diseño de sonrisa que proveemos en La Clínica Facial:</p>
</div>

</main>

<style>
/* DISEÑO DE TRATAMIENTOS DENTALES */
.tratamientos-dentales {
    text-align: center;
}

.tratamientos-dentales h2 {
    font-size: 30px;
    color: #95534E;
}
.tratamientos-dentales h2::after {
  content: "";
  display: block;
  width: 10%; 
  border-bottom: 2px solid #95534E;
  margin-left: 45%;
}

/* DISEÑO DE TRATAMIENTOS FACIALES */
.tratamientos-faciales {
    margin-top: 5%;
    padding: 1% 5%;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 5px 15px;
    text-align: center;
}
.tratamientos-faciales h2{
    color: #95534E;
}
.tratamientos-faciales h2::after {
  content: "";
  display: block;
  width: 10%; 
  border-bottom: 2px solid #95534E;
  margin-left: 45%;
}
/* DISEÑO DE CONTACTOS */
.contacto {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 20px;
        height: 40vh;
        background-image: url("/img/contactos-boton.png");
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    .contacto-contenido {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contacto p {
        margin-bottom: 10px;
        font-size: 1.2rem; 
    }

    .contacto a {
        margin-top: 10px;
    }

/* ESTILO DE DISELO-SONRISAS */
.diseño-sonrisas{
	text-align: center;
	margin-top:60px;
    font-family:'Lato', sans-serif;
}
.diseño-sonrisas p{
    display: flex;
    justify-content: center;
    align-items: center;
}
.diseño-sonrisas h2{
    color: #95534E;
}
.diseño-sonrisas h2::after {
  content: "";
  display: block;
  width: 10%; 
  border-bottom: 2px solid #95534E;
  margin-left: 45%;
}

@media (min-width:992px) and (max-device-width: 1367px){ 
	.diseño-sonrisas{
		flex-wrap: wrap;
	}

	.diseño-sonrisas h2{
		width:100%;
	}
}
</style>