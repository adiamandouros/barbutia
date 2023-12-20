const url = 'https://barbutia.fans/content/imgs/gallery/Original/';
fetch(url)
.then(response => response.json())
.then(data => console.log(data));

// const imageDisplay = document.getElementById('photosMain');
// let i=0;
// for(const image of images) {
//     console.log(image);
// }