const page = {
    title : document.querySelector('.header__title'),
    subtitle : document.querySelector('.header__subtitle'),
    description : document.querySelector('.exercice__detail-description'),
    adviceList : null,

    index : function (training) {
        const container = block.createEmptyElement('div', ['menu__item']);
        const description = block.createTextElement('p', training.getName());

        const link = block.createTextElement('a', training.getTitle(), ['menu__item-link'])
        block.assignAttributes(link, 'href', 'html/' + training.getLink()+'.html');
        
        block.assemble(container, link);
        block.assemble(container, description);
        block.assemble(exercice.mainMenu, container);

    },

    exercicePage : function (training, actualPage) {
        advices.init();
        let link; 
        actualPage = actualPage[0];
        if( actualPage === training.getLink()) {
            link = block.createTextElement('a', training.getTitle(), ['menu__item-link', 'menu__item-link--active']);
            
            block.assignText(page.title, training.getTitle());
            block.assignText(page.subtitle, training.getName());
            block.assignText(page.description, training.getDescription());
                        
            page.adviceList = training.getAdvice();
        } else {
            link = block.createTextElement('a', training.getTitle(), ['menu__item-link']);
        }
        block.assignAttributes(link, 'href', training.getLink()+'.html' )

        block.assemble(exercice.mainMenu, link);

    },
}
