// @ts-nocheck
//PRINCIPAL
import Inicio from './Principal/Inicio.svelte'
import Tratamientos from './Principal/Tratamientos.svelte'
import Toxina from './Principal/Toxina.svelte'
import Contacto from './Principal/Contacto.svelte';
import Nosotros from './Principal/Nosotros.svelte';
//SUCURSAL
import Sucursales from './Sucursales/Sucursales.svelte'
//ERRORES
import Error404 from "./Errores/Error404.svelte";

const routes = {
    //PRINCIPAL
    '/': Inicio,
    '/ToxinaBotulínica':Toxina,
    '/Tratamientos': Tratamientos,
    '/Contacto': Contacto,
    '/Nosotros': Nosotros,
    //SUCURSAL
    '/Sucursales': Sucursales,
    // Errores
    '*': Error404
}

export default routes