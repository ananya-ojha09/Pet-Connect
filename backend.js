const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);
function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function showCaption() {
    const captions = document.querySelectorAll('.caption');
    captions.forEach((caption, index) => {
        caption.style.display = index === currentSlide ? 'block' : 'none';
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
    showCaption();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
    showCaption();
});

showSlide(currentSlide);
showCaption();
const images = document.querySelectorAll('.image');

images.forEach((image) => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});
const thumbnail = document.getElementById('thumbnail');
const video = document.getElementById('video');

thumbnail.addEventListener('click', () => {
    thumbnail.classList.add('hidden');
    video.classList.remove('hidden');
    video.play();
});
