const lista = document.querySelectorAll('.pendientes');
const formulario = document.querySelector('#formulario');
const ul = document.querySelector('#lista');
const eliminar = document.querySelector('.eliminar');


formulario.addEventListener('submit',(e) => {
  e.preventDefault();
  agregar(e.target.tarea.value);
  e.target.tarea.value = '';
  
});

function agregar(value){
  let tarea = `<li class="pendientes bg-white rounded-lg shadow-md p-3 flex items-center justify-between">
                <span class="text-gray-700">${value}</span>
                <button class="eliminar text-red-500 hover:text-red-700">Eliminar</button>
            </li>`;
  ul.innerHTML += tarea;
}

ul.addEventListener('click', e => {
  if( e.target.classList.contains('eliminar')){
    e.target.parentNode.remove();
  }
  if( e.target.tagName == 'SPAN' ){
    e.target.classList.toggle('line-through');
  } 
});