import { zoomInPictures } from "./zoom-pictures";
import { getGalleryTarasy } from "../assets/data/tarasy-galeria";
const galleryContainer = document.getElementById('galeria-tarasy')

const renderGallery = () => {
    galleryContainer.innerHTML = '';
    getGalleryTarasy(0).forEach(image => {
        const imageContainer = document.createElement('div')
        imageContainer.innerHTML = `<img loading="lazy" class="w-full h-[450px] cursor-pointer hover:brightness-90 object-cover" src="${image.imgSrc}" alt="${image.imgAlt}" />`

        galleryContainer.appendChild(imageContainer)
    })
    const galleryPicturesTarasy = document.querySelectorAll('#galeria-tarasy img');
    galleryPicturesTarasy.forEach((picture,index) => picture.addEventListener('click', ()=>zoomInPictures(galleryPicturesTarasy, index)));

}

renderGallery()

