const search = new URL(window.location).searchParams.get('search');
const images = document.querySelectorAll('.img-thumbnail');
const modalImage = document.getElementById('modalImage');
const imageDisplayer = new bootstrap.Modal(document.getElementById('imageDisplayer'));

for(const image of images) {
    image.addEventListener('click', (event) => {
        // console.log(event);
        modalImage.setAttribute('src', event.srcElement.currentSrc.replace('Resized', 'Original'));
        modalImage.setAttribute('alt', event.srcElement.alt);
        imageDisplayer.show()
    })
}