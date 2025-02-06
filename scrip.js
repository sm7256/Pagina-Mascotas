// Seleccionamos los elementos necesarios
const contactoLink = document.querySelector('nav ul li a[href="#contacto"]');
const contactoSection = document.querySelector('.contact-info');
const contactoOverlay = document.createElement('div');

// Creamos un overlay para darle un efecto de modal
contactoOverlay.className = 'contacto-overlay';
document.body.appendChild(contactoOverlay);

// Agregamos un evento de clic al enlace "Contáctenos"
contactoLink.addEventListener('click', function(event) {
  event.preventDefault();
  mostrarContacto();
});

// Función para mostrar la sección de contacto
function mostrarContacto() {
  contactoSection.style.display = 'block';
  contactoOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Función para ocultar la sección de contacto
function ocultarContacto() {
  contactoSection.style.display = 'none';
  contactoOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Agregamos un evento de clic al overlay para ocultar la sección de contacto
contactoOverlay.addEventListener('click', function() {
  ocultarContacto();
});

// Agregamos un evento de teclado para ocultar la sección de contacto cuando se presiona la tecla "Escape"
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    ocultarContacto();
  }
});