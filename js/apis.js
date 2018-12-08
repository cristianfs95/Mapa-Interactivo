var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -31.411020140896007, lng: -64.19157028198242};
var zoomInicial = 15;


// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    mapa = new google.maps.Map( document.getElementById('map'), {
        center: posicionCentral,
        zoom: zoomInicial});

    streetViewModulo.inicializar();
    geocodificadorModulo.inicializar();
    marcadorModulo.inicializar();
    direccionesModulo.inicializar();
    lugaresModulo.inicializar();

}
