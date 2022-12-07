const eleve1 = {
    name: 'Paul',
    notes: [12, 15, 8],
}

const eleve2 = {
    name: 'Jean',
    notes: [9, 13, 17],
}

const students = {
    btn : document.querySelector('#bestStudent'),
    champion : document.querySelector('#bestStudentName'),
    best : function(studentOne, studentTwo) {
        if (studentOne.average > studentTwo.average) {
            students.champion.textContent = studentOne.name;
        } else {
            students.champion.textContent = studentTwo.name;
        }
    },
    averageCalcul : function(notes) {
        let somme = 0;

        for (const note of notes) {
            somme += note;
        }
        
        return(somme / notes.length);
    },
    show : function(student) {
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
    },
    handleClick : function() {
        students.best(eleve1, eleve2);
    },
    init : function() {
        eleve1.average = students.averageCalcul(eleve1.notes);
        eleve2.average = students.averageCalcul(eleve2.notes);
        students.show(eleve1);
        students.show(eleve2);
        students.btn.addEventListener('click', students.handleClick)
    }
}