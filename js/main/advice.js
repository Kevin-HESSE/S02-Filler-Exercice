const advices = {
    arrowLeft : document.querySelector('#arrow-left'),
    arrowRight : document.querySelector('#arrow-right'),
    step : 0,
    
    backward : function () {
        if (advices.step === (page.adviceList.length-1)) {
            advices.arrowRight.classList.remove('hidden');
            advices.step = advices.displayMessage(false, page.adviceList);
        } else {
            advices.step = advices.displayMessage(false, page.adviceList, advices.step);
        }
    
        if (advices.step === 0 ) {
            advices.arrowLeft.classList.add('hidden');
        }
    },

    forward : function () {
        if (advices.step === 0 ) {
            advices.arrowLeft.classList.remove('hidden');
        }
      
        if (advices.step === (page.adviceList.length-1)) {
            advices.displayMessage(true, page.adviceList);
            advices.arrowRight.classList.add('hidden');
        } else {
            advices.step = advices.displayMessage(true, page.adviceList , advices.step);
        }
    },

    displayMessage : function (direction, adviceArray, index = (page.adviceList.length-1)) {
        const adviceTag = document.querySelector('#advice')
        if (direction === true){
            adviceTag.innerHTML = adviceArray[index];
            index++;
        } else {
            index--;
            adviceTag.innerHTML = adviceArray[index];
        }
    
        return index;
    },
    
    init : function () {
        advices.arrowLeft.addEventListener('click', advices.backward);
        advices.arrowRight.addEventListener('click', advices.forward);
    }
}