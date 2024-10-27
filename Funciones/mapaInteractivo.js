let map;
let markers = []; // Array para almacenar los marcadores

function initMap() {
    const countryLocation = { lat: [39.399872], lng: [-8.224454] }; //Coordenadas de Portugal
  

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: countryLocation,
    });

    // Marcadores para las atracciones
    const attractions = [
        { name: "Atracción número 1: Lisboa", location: { lat: [38.71667], lng: [-9.13933] } },
        { name: "Atracción número 2: Oporto", location: { lat: [41.14961], lng: [-8.61099] } },
        { name: "Atracción número 3: Sintra (Palacio da Pena)", location: { lat: [38.78935], lng: [-9.39425] } },
    ];

    attractions.forEach(attraction => {
        const marker = new google.maps.Marker({
            position: attraction.location,
            map: map,
            title: attraction.name,
        });
        markers.push(marker); // Almacenar el marcador en el array
    });
}

function focusOnAttraction(lat, lng) {
    const attractionLocation = [lat, lng];
    
    // Limpiar marcadores anteriores
    markers.forEach(marker => marker.remove()); // Eliminar todos los marcadores del mapa
    
    // Mover el mapa a la ubicación de la atracción
    map.setView(attractionLocation, 10); // Aumentar el zoom al hacer clic en la atracción
    
    // Crear un nuevo marcador para la atracción seleccionada
    const newMarker = L.marker(attractionLocation).addTo(map);
    
    // Agregar un popup al nuevo marcador
    newMarker.bindPopup("Atracción seleccionada").openPopup();
}