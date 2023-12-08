const cards = document.querySelectorAll('.card__world');

cards.forEach(card => {
    card.addEventListener('click', () => {
        closeCardsActive();
        card.classList.add('active');
    });
});

function closeCardsActive() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}