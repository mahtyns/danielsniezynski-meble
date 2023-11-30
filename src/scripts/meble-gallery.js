import arrayFiles from "../assets/data/meble-galeria";
const showMoreButton = document.getElementById('meble-see-more')

const galleryContainer = document.getElementById('galeria-meble')
const startInd = 0;
let sliceNum = 6;
const addMorePhotosNum = 6;

const renderGallery = () => {
    galleryContainer.innerHTML = '';

    arrayFiles
        .slice(startInd, sliceNum)
        .forEach(image => {
            const imageContainer = document.createElement('div')
            imageContainer.innerHTML = `<img loading="lazy" class="w-full h-[450px] cursor-pointer hover:brightness-90 object-cover" src="${image.imgSrc}" alt="${image.imgAlt}" />`
            galleryContainer.appendChild(imageContainer)
        })
}

renderGallery();

const addMorePhotos = () => {
    if (sliceNum < arrayFiles.length) {
        sliceNum = sliceNum + addMorePhotosNum;
        renderGallery()
    } 
    else {showMoreButton.innerText = "To już wszystko!"}
}

showMoreButton.addEventListener("click", addMorePhotos)