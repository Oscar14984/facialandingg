<script>
    const abrirWhats = () =>{
            window.open('https://api.whatsapp.com/send/?phone=5215574231843&text=%21Hola+me+comunico+de+la+p%C3%A1gina+La+Cl%C3%ADnica+Facial+deseo+m%C3%A1s+informaci%C3%B3n%21&type=phone_number&app_absent=0', '_blank');
        }
    </script>
    
    <main class="container">
        <div class="tratamientos">
            <!-- derecha -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/revitalizacionFacial.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Revitalización Facial</h5>
                            <p class="card-text"> Contrarresta las arrugas para lucir un rostro más joven, luminoso, hidratado y con mayor vitalidad.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    <!-- izquierda -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/hidratacionProfunda.png" class="img-fluid rounded-start img-reducir " alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Hidratación Profunda Con Ácido Hialurónico</h5>
                            <p class="card-text"> Mejorar la calidad de la piel, la luminosidad y disminuye las arrugas finas. consiguiendo un efecto tensor y un aumento del colágeno y elastina.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <!-- derecha -->
             <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/Lipoescultura-cervical.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Lipoescultura Cervical</h5>
                            <p class="card-text"> Es un procedimiento quirúrgico que elimina el exceso de grasa de la denominada “papada”, redefine el contorno facial. Es un procedimiento ambulatorio, requiere anestesia y reposo.!</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- izquierda -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/ToxinaBotulínica.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Toxina Botulínica</h5>
                            <p class="card-text"> Conseguimos que los músculos se relajen, reduciendo las arrugas. Tiene un efecto de aproximadamente entre 3 y 6 meses.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- derecha -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/rellenos-faciales.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Rellenos Faciales</h5>
                            <p class="card-text"> Suaviza de manera temporal las arrugas faciales. Se puede retomar las actividades normales de manera inmediata. La duración del efecto depende  del tipo de arruga y el relleno utilizado.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- izquierda -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/modelado-facial.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Modelado Facial con Ácido Hialurónico</h5>
                            <p class="card-text"> Modelación facial con  ácido hialurónico para la eliminación de las arrugas del entrecejo, las comisuras de la boca, las patas de gallo,  dar volumen a los labios, pómulos y mentón.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- derecha -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/Rellenos-labiales.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Rellenos Labiales</h5>
                            <p class="card-text"> Es totalmente indoloro, se infiltra ácido hialurónico para dar volúmen a los labios, normalmente es un tratamiento que permite retomar las actividades normales de manera inmediata. Tiene una duración de 6 a 9 meses.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <!-- izquierda -->
             <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/Microneedeling.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Microneedeling Con Plasma</h5>
                            <p class="card-text"> La infiltración con microagujas de plasma rico en factores de crecimiento nos genera regeneración celular promoviendo la generación de colágeno, elastina lo que hace tener una piel radiante, bien hidratada, uniforme y jóven.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- derecha -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/Bichectomías.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Bichectomías</h5>
                            <p class="card-text"> Es el procedimiento quirúrgico que elimina las bolsas de bichat, que son grasa que se encuentra en las mejillas, al quitarlas se da una definición armónica al rostro haciéndolo lucir más delgado, los resultados suelen verse a las 3 semanas postoperatorio y es permanente. Requiere reposo.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- izquierda -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 "> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/Microneedeling.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title"> Microneedeling Con Ácido Hialuronico</h5>
                            <p class="card-text"> La infiltración de ácido hialurónico mediante microagujas ayuda a dar uniformidad, elasticidad e hidratación de la piel, eliminando arrugas finas y dando un rejuvenecimiento a la piel.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- derecha -->
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4 order-md-1"> <!-- Añade la clase order-md-1 para controlar el orden en pantallas medianas y grandes -->
                        <img src="img-tratamientos/NanoNeedle.png" class="img-fluid rounded-start img-reducir" alt="...">
                    </div>
                    <div class="col-md-8 order-md-0"> <!-- Añade la clase order-md-0 para controlar el orden en pantallas medianas y grandes -->
                        <div class="card-body">
                            <h5 class="card-title">Nano needle</h5>
                            <p class="card-text">  Es un procedimiento realizado con nanoagujas totalmente asintomático que permite la absorción de nutrientes a la piel, lo que hace lucirla con mayor hidratación.</p>
                        </div>
                        <div class="btn-trata">
                            <button class="btn btn-tra " on:click={abrirWhats}>
                              <i class="bi bi-whatsapp"></i>
                              Agenda tu Primera Cita Gratis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          
    
        </div>
    </main>
    
    
    <style>
    
       h5{
        font-weight: bold;
        color: #95534E;
        border-bottom: 3px #95534E solid;
        width: 300px;
       }
       .img-reducir{
        width: 200px !important; 
        height: auto;
       margin-left: 200px !important;
       }
       .btn-tra{
        background-color:#282828 ;
        color: white;
        margin-left: 30px;
       }
       .btn-tra:hover{
        background-color:green ;
        color: white;
       }
        
          .card {
                max-width: 100%;
            }
    
            /* .card img {
                width: 100%;
            } */
            
    @media (min-width: 768px) {
        .order-md-0 {
            -ms-flex-order: 0;
            order: 0;
        }
    
        .order-md-1 {
            -ms-flex-order: 1;
            order: 1;
        }
        .img-reducir{
        margin-left: 70px !important;
       }
    }
    </style>