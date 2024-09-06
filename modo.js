document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('tema');
  
    button.addEventListener('click', function() {
      document.body.classList.toggle('modo_escuro');
  
      if (document.body.classList.contains('modo_escuro')) {
        button.textContent = 'Modo Claro';
      } else {
        button.textContent = 'Modo Escuro';
      }
    });
  });
  