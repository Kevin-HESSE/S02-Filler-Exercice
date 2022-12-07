const menu = {
    link: document.querySelector('#link'),
    burger: document.querySelector('#burger'),
    container: document.querySelector('#menuTraining'),
    handleClick: function(event) {
        event.preventDefault();
        menu.burger.classList.toggle('open');
        menu.container.classList.toggle('open');
    },
    init: function() {
        menu.link.addEventListener('click', menu.handleClick);
    }
}

