<script>
import Router from "svelte-spa-router";
import routes from './routes'

import Menu from './Componentes/Menu.svelte'
import Footer from "./Componentes/Footer.svelte";
if (window.location.hash !== '#/') {
    window.location.href = '?#' + window.location.hash.slice(1);
    }
</script>

<main>
<Menu />
<Router {routes} />
<Footer />
</main>

<style>

</style>