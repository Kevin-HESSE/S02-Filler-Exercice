/* Cette fonction fait appel à une autre fonction qui se trouve dans le dossier js/main/block.js  */

/**
 * Permet d'afficher les données de l'étudiant dans le fichier html.
 * @param {Object} student 
 */
function showStudent(student) {
    const listStudent = document.querySelector('#listStudent')

    const container = block.createEmptyElement('div', ['student']);
    const nameStudent = block.createTextElement('p', 'Nom : '+student.name, ['student__name']);
    const listNote = block.createEmptyElement('ul', ['student__note']);

    for (let index = 0; index <student.notes.length; index++){
        const note = block.createTextElement('li', `Note ${(index+1)} : ${student.notes[index]}`);
        block.assemble(listNote,note);
    }

    block.assignAttributes(listNote, 'id','listNote_'+student.name );

    block.assemble(container, nameStudent);
    block.assemble(container, listNote);
    block.assemble(listStudent, container);
}

/** Votre code ici : */