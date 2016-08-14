// Versión movil
const dropdown = document.querySelector('.dropdown-container');
const ul = document.querySelector('.dropdown-container ul');

dropdown.addEventListener('click', function() {
  ul.classList.toggle('show');
});
