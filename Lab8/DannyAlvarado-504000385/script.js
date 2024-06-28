document.addEventListener('DOMContentLoaded', function() {
    window.comprarProducto = function(producto) {
        const mensaje = `Hola, estoy interesado en comprar ${producto}.`;
        const url = `https://wa.me/50663207518?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };
});
