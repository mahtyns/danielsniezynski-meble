import arrayFiles from "../assets/data/meble-galeria";
const showMoreButton = document.getElementById('meble-see-more')
import { zoomInPictures } from "./zoom-pictures";
const galleryContainer = document.getElementById('galeria-meble')
const startInd = 0;
let sliceNum = 6;
const addMorePhotosNum = 6;
// const page = document.querySelector('body')
// const pageFirstChild = page.firstChild;

// const zoomInPictures = (pic) => {
//     const zoomInWrapper = document.createElement('div');
//     const imgSrc = pic.getAttribute('src');
//     const imgAlt = pic.getAttribute('alt');
//     const listClasses = ['bg-black-opacity', 'w-full', 'h-full', 'z-10', 'fixed', 'top-0', 'left-0', 'flex', 'items-center', 'justify-center']
//     page.classList.add('overflow-y-hidden')
//     zoomInWrapper.classList.add(...listClasses);
//     zoomInWrapper.innerHTML = `<img src=${imgSrc} alt=${imgAlt} class="w-[90%] h-auto cursor-pointer z-30" />`
//     page.insertBefore(zoomInWrapper, pageFirstChild);
//     zoomInWrapper.addEventListener('click', ()=> {
//         page.classList.remove('overflow-y-hidden');
//         zoomInWrapper.remove()
//         zoomInWrapper.removeEventListener('click', closeZoomIn);
//     })
// }

const renderGallery = () => {
    galleryContainer.innerHTML = '';

    arrayFiles
        .slice(startInd, sliceNum)
        .forEach(image => {
            const imageContainer = document.createElement('div')
            imageContainer.innerHTML = `<img loading="lazy" class="w-full h-[450px] cursor-pointer hover:brightness-90 object-cover" src="${image.imgSrc}" alt="${image.imgAlt}" />`
            galleryContainer.appendChild(imageContainer)
           
        })

        const galleryPicturesMeble = document.querySelectorAll('#galeria-meble img');
        galleryPicturesMeble.forEach(picture => picture.addEventListener('click', ()=>zoomInPictures(picture)));
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
