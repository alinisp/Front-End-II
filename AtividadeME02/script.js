document.addEventListener('DOMContentLoaded', function() {
    const miniaturas = document.querySelectorAll('.miniatura');
    const imgAmpliada = document.getElementById('imgAmpliada');

    miniaturas.forEach(function(miniatura) {
      miniatura.addEventListener('click', function() {
        imgAmpliada.src = this.src;
        imgAmpliada.style.display = 'block';
        this.style.opacity = '1';
        miniaturas.forEach(function(outro) {
          if (outro !== miniatura) {
            outro.style.opacity = '0.4';
        }
      });
    });
  });
});                                                                                                     