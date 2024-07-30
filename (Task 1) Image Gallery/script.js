let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const imageContainer = document.getElementById('image-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateGallery() {
    const width = imageContainer.clientWidth;
    imageContainer.style.transform = `translateX(${-currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
});

window.addEventListener('resize', updateGallery);
updateGallery();
