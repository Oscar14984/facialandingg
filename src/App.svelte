<script>
import Router from "svelte-spa-router";
import routes from './routes'

import Menu from './Componentes/Menu.svelte'
import Footer from "./Componentes/Footer.svelte";
</script>

<main>
<Menu />
<Router {routes} />
<Footer />
</main>

<style>

</style>