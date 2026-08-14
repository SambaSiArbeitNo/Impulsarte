function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.serviceCardContainer');

    function updateActiveCards() {
        carousels.forEach(carousel => {
            const cards = carousel.querySelectorAll('.serviceCard');

            const carouselRect = carousel.getBoundingClientRect();
            const carouselCenter =
                carouselRect.left + carouselRect.width / 2;

            let closestCard = null;
            let minDistance = Infinity;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;
                const distance = Math.abs(carouselCenter - cardCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestCard = card;
                }
            });

            // Only change classes if the active card actually changed
            const currentActive = carousel.querySelector('.serviceCard.active');

            if (currentActive !== closestCard) {
                if (currentActive) {
                    currentActive.classList.remove('active');
                }

                if (closestCard) {
                    closestCard.classList.add('active');
                }
            }
        });

        requestAnimationFrame(updateActiveCards);
    }

    updateActiveCards();
});