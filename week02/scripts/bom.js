// Referencias a los elementos
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Función para agregar un nuevo capítulo
button.addEventListener('click', () => {
    const chapterName = input.value.trim();

    // Verificar que el campo no esté vacío
    if (chapterName) {
        const li = document.createElement('li');
        li.textContent = chapterName;

        // Crear botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');
        
        // Agregar evento para eliminar el capítulo
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.append(deleteButton);
        list.append(li);

        // Limpiar el campo de entrada
        input.value = '';
        input.focus();
    } else {
        alert('Please, add a chapter.');
    }
});
