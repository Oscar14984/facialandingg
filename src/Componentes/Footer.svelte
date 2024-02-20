<script>

</script>

<main>
    <footer class="gridContainer">
        <div class="row">
            <div class="col-12 col-sm-3">
                <div class="container">
                    <img src="img/Logo-La-Clinica-Facial-White.png" alt="">
                    <!-- Social Media -->
                    <p><strong>La Clínica Facial</strong>, está conformada por un grupo de doctores especializados en tratamientos estticos y dentales, preocupados por el bienestar y la salud de la sociedad colombiana. Ofrecemos alternativas con tecnología de punta para garantizar la calidad de nuestro servicio.</p>
                </div>
            </div>
            <div class="col-12 col-sm-3">
                <div class="convenios">
                    <h5>INFORMACIÓN</h5>
                    <a href="!#" target="_blank">SITEMAP</a>
                    <a href="!#" target="_blank">CONTÁCTOS</a>
                    <a href="!#" target="_blank">POLÍTICAS DE PRIVACIDAD</a>
                </div>
            </div>
            <div class="col-12 col-sm-3">
                <div class="rs">
                    <strong>SUCURSALES</strong>
                    <p>Sucursal La Clínica dental Polanco</p>
                    <p>Sucursal La Clínica Dental Roma</p>
                </div>
            </div>
            <div class="col-12 col-sm-3">
                <h5>NUESTRAS REDES SOCIALES</h5>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <br>
                <button class="btn btn-redes"><i class="bi bi-chat-fill"></i>CHAT AHORA</button>
            </div>
        </div>
        
    </footer>
</main>

<style>
    /* COLOR QUE SE USARA EN EL FOOTER #2D3549 */
    /* COLOR QUE SE USARA EN LA PARTE DE DERECHOS RESERVADOS #192135 */
   /* Estilos generales del footer */
footer {
    background-color: #282828;
    /* position: fixed; */
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    padding: 20px 0; 
}

/* Estilos del grid del footer */
.gridContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 20px; 
    justify-content: center; 
    align-items: center; 
}

/* Estilos específicos del área de convenios */
.convenios {
    text-align: center;
}

.convenios h5 {
    margin-bottom: 10px;
}

.convenios a {
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    color: white; 
    border-bottom: 1px solid #ccc; 
    padding-bottom: 5px; 
}

/* Estilos para el último enlace */
.convenios a:last-child {
    margin-bottom: 0; 
}

/* Estilos específicos del área de redes sociales */
.rs {
    text-align: center;
}

/* Estilos para los párrafos dentro del footer */
.container p {
    margin-left: 30px;
    margin-top: 0; 
    margin-bottom: 10px; 
}

.container img{
    margin-left: 50px;
}
.btn-redes{
    color: white;
    border: 1px solid white;
}

@media (max-width: 768px){
    .row {
        display: flex;
        flex-direction: column;
    }
    .container img {
        margin-left: 15%;
        margin-bottom: 3%;
    } 
}
</style>