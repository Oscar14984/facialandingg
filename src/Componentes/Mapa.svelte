<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
  
    let map;
  
    onMount(() => {
      map = L.map('map').setView([19.357028, -99.1985], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
  
      // Create a DivIcon with your Svelte component
      const divIcon = L.divIcon({
        html: '<div><YourSvelteComponent /></div>', // Replace with your actual component
        className: 'custom-icon-class', // Optional CSS class for styling
      });
  
      // Add a marker with the custom icon
      L.marker([19.357028, -99.1985], { icon: divIcon }).addTo(map);
    });
  </script>
  
  <style>
    /* Add any custom styling for your icon here */
    /* .custom-icon-class {
      
    } */
  </style>
  
  <div id="map"></div>