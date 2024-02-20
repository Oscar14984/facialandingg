<script>

</script>

<main>
    <div class="nosotros">
        <img src="img/nosotros.jpg" alt="">
        <div class="texto-superpuesto"><p>Quienes Somos</p></div>
    </div>
    <div class="contenido-facial">
        <img src="img/facial.jpg" alt="">
        <p></p>
    </div>
    <div class="tratamiento-facial">
        <img src="img/Tratamiento-facial.jpg" alt="">
    </div>
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
</style>