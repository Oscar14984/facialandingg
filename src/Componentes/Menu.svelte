<script>
  import {link} from 'svelte-spa-router'
 

</script>

<main>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <img src="img/logo-la-clinica-dental-oscuro.png" alt="">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="!#">Tratamientos</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="!#">NOSOTROS</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" use:link href="/Tratamientos">Sucursales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="!#">Contáctanos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="!#">Nosotros</a>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" use:link href="/Contactanos">CONTÁCTANOS</a> -->
              </li>
              
            </ul>
            <button class="btn agenda">
                <i class="bi bi-whatsapp"></i>
                Cotiza tu Tratamiento
            </button>
            <button class="btn llamada">
                <i class="bi bi-telephone"></i>
                Llámanos
            </button>
          </div>
        </div>
      </nav>
</main>

<style>
    /* COLOR QUE SE USA en facial #F3D3A4*/
    .agenda{
        background-color:#F3D3A4;
        color: white;
        margin-right: 10px;
      }
      .llamada{
      margin-right: 200px;
        background-color:#F3D3A4; 
        color: white;
    }

   

    /* HOVER DEL nav-item a */
    .navbar-nav .nav-item.active a,
  .navbar-nav .nav-item:hover a {
    color: #F3D3A4; 
    border-bottom: 2px solid #F3D3A4; 
  }

  .navbar-expand-lg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(40, 40, 40, 0.5);
    /* color: white; */
    text-align: center;
    z-index: 1;
  }
  .collapse{
    margin-left: 500px;
  }
  .nav-item a {
    color: gold;
  }
</style>
