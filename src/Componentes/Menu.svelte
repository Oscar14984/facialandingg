<script>
  import {link, push} from 'svelte-spa-router'
const pushInicio = () =>{
  push("/")
}
const llamar = () => {
        window.location.href = 'tel:5588547122';
    }


</script>

<main>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <img src="img-logos/perfil-facebook_fondo negro.png" alt="" on:click={pushInicio}>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" use:link href="/Tratamientos">Tratamientos</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="!#">NOSOTROS</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" use:link href="/Sucursales">Sucursales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" use:link href="/Contacto">Contáctanos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" use:link href="/Nosotros">Nosotros</a>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" use:link href="/Contactanos">CONTÁCTANOS</a> -->
              </li>
              
            </ul>
            <button class="btn agenda">
                <i class="bi bi-whatsapp"></i>
                Cotiza tu Tratamiento
            </button>
            <button class="btn llamada" on:click={llamar}>
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
      margin-right: 0px;
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
    text-align: center;
    z-index: 1;
  }

  .collapse{
    margin-left: 300px;
  }

  .nav-item a {
    color: gold;
  }

  .container-fluid img{
    width: 5%;
    margin-left: 200px;
    cursor: pointer;
  }
  
  @media (max-width: 768px) {
    .collapse{
    margin-left: 0px;
  }
  .container-fluid img{
    width: 15%;
    margin-left: 00px;
  }
  .llamada{
    margin-top: 15px;
    margin-right: 100px;
  }
  }
</style>
