document.getElementById('ingresotareas').addEventListener('submit', function (e) {
    e.preventDefault();
       
    const tarea = document.getElementById('nombretarea').value;


    if (tarea === '') {
        alert('Por favor complete el Nombre del Campo ');
        return;
        }

        const detalletareas = document.getElementById('ListaTareas');
        const li = document.createElement('li');
        let TotalTareas = document.querySelectorAll('#ListaTareas li').length;
        ++TotalTareas;
        const idtarea=TotalTareas;
        li.textContent = `${idtarea} / ${tarea}`;
        detalletareas.appendChild(li);
        document.getElementById('Totales').textContent = "Total : "+TotalTareas;
        document.getElementById('nombretarea').value = '';



})
