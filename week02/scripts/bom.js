// Referencias a los elementos
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Función para agregar un nuevo capítulo
button.addEventListener('click', () => {
    const chapterName = input.value.trim();

    // Verify that the field is not empty.
    if (chapterName) {
        const li = document.createElement('li');
        li.textContent = chapterName;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');
        
        // Add event to delete chapter
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.append(deleteButton);
        list.append(li);

        // Clear the input field
        input.value = '';
        input.focus();
    } else {
        alert('Please, add a chapter.');
    }
});
