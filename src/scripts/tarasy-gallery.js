import tarasyArray from "../assets/data/tarasy-galeria";
import { zoomInPictures } from "./zoom-pictures";
const galleryContainer = document.getElementById('galeria-tarasy')

const renderGallery = () => {
    tarasyArray.forEach(image => {
        const imageContainer = document.createElement('div')
        imageContainer.innerHTML = `<img loading="lazy" class="w-full h-[450px] cursor-pointer hover:brightness-90 object-cover" src="${image.imgSrc}" alt="${image.imgAlt}" />`

        galleryContainer.appendChild(imageContainer)
    })
    const galleryPicturesTarasy = document.querySelectorAll('#galeria-tarasy img');
    galleryPicturesTarasy.forEach(picture => picture.addEventListener('click', ()=>zoomInPictures(picture)));

}

renderGallery()
