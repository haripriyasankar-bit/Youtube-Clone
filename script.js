const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach((card) => {
    card.addEventListener('click', () => {
        alert('Video Player Coming Soon!');
    });
});