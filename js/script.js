function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

const carousel = document.getElementById('carousel1');
const track = document.getElementById('track1');
const cards = Array.from(document.querySelectorAll('.card'));

let currentIndex = 0;

function updateCarousel() {
    const carouselWidth = carousel.offsetWidth;
    const card = cards[currentIndex];

    // Card center relative to track
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    // Move track so selected card is centered
    const translateX = carouselWidth / 2 - cardCenter;

    track.style.transform = `translateX(${translateX}px)`;

    // Update active class
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
}

// Initial position
updateCarousel();

// Move every 2 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}, 2000);

const carousel = document.getElementById('carousel2');
const track = document.getElementById('track2');
const cards = Array.from(document.querySelectorAll('.card'));

let currentIndex = 0;

function updateCarousel() {
    const carouselWidth = carousel.offsetWidth;
    const card = cards[currentIndex];

    // Card center relative to track
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    // Move track so selected card is centered
    const translateX = carouselWidth / 2 - cardCenter;

    track.style.transform = `translateX(${translateX}px)`;

    // Update active class
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
}

// Initial position
updateCarousel();

// Move every 2 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}, 2000);