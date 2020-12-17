var toggle = document.querySelector('.toggle'),
    round = document.querySelector('.round'),
    active = false,
    header = document.querySelector('.header'),
    body = document.body,
    main = document.querySelector('main'),
    cards = document.querySelectorAll('.card'),
    allspan = document.querySelectorAll('span'),
    h4 = document.querySelectorAll('h4'),
    allp = document.querySelectorAll('p');


toggle.addEventListener('click', () => {
    round.classList.toggle('active');
    round.classList.toggle('light');
    toggle.classList.toggle('light');
    header.classList.toggle('light');
    main.classList.toggle('light');
    cards.forEach(card => {
        card.classList.toggle('light');
    });
    body.classList.toggle('light');
    allspan.forEach(p => {
        p.classList.toggle('light');
    });
    allp.forEach(p => {
        p.classList.toggle('light');
    });
    h4.forEach(p => {
        p.classList.toggle('light');
    });
});

