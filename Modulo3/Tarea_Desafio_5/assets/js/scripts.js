document.getElementById('ingresotareas').addEventListener('submit', function (e) {
    e.preventDefault();
       
    const tarea = document.getElementById('nombretarea').value;


    if (tarea === '') {
        alert('Por favor complete el Nombre del Campo ');
        return;
        }

        const detalletareas = document.getElementById('ListaTareas');
        const li = document.createElement('li');
        li.textContent = `${tarea}`;
        detalletareas.appendChild(li);
        


})
