// @ts-nocheck
import Inicio from './Principal/Inicio.svelte'
import Tratamientos from './Principal/Tratamientos.svelte'
import Toxina from './Principal/Toxina.svelte'
import Sucursales from './Sucursales/Sucursales.svelte'
import Error404 from "./Errores/Error404.svelte";

const routes = {
    '/': Inicio,
    '/ToxinaBotulínica':Toxina,
    '/Tratamientos': Tratamientos,
    '/Sucursales': Sucursales,
    // Errores
    '*': Error404
}

export default routes