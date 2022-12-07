const block = {
    createEmptyElement : function(tagElement, listStyles = null) {
        const element = document.createElement(tagElement);
        
        if (listStyles !== null) {
            block.assignClass(element, listStyles);
        }

        return element;
    },
    
    createTextElement : function (tagElement, text, listStyles = null) {
        const element = block.createEmptyElement(tagElement, listStyles);
        
        element.textContent = text;

        return element;
    },

    assignText : function(tagElement, text) {
        tagElement.textContent = text;
    },

    assignClass : function (tagElement, listStyles) {
        for (const style of listStyles) {
            tagElement.classList.add(style);
        }
    },

    assignAttributes : function(tagElement, attribute, parameter) {
        tagElement.setAttribute(attribute, parameter);
    },

    assemble : function(parentElement, childElement) {
        parentElement.append(childElement);
    }
}