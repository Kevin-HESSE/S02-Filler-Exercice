const sentence = {
    form : document.querySelector('#formSentence'),
    showSentence : document.querySelector('#sentenceGiven'),
    nbLetter : document.querySelector('#countLetter'),

    handleSubmit : function(event) {
        event.preventDefault();
        const userSentence = sentence.form[0].value;
        sentence.countLetter(userSentence);
    },
    countLetter : function(userSentence) {
        let count =0 ;
        const sentenceSplit = userSentence.split(' ');

        for (let index = 0; index < sentenceSplit.length; index++) {
            count += sentenceSplit[index].length;
        }
        
        sentence.showSentence.textContent = userSentence;
        sentence.nbLetter.textContent = count;
    },
    init : function() {
        sentence.countLetter('Je suis a la fois tout et rien');
        sentence.form.addEventListener('submit', sentence.handleSubmit);
    },
}



