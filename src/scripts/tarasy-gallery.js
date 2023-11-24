import {tarasyLista} from "../assets/data/tarasy-galeria";

const galleryContainer = document.getElementById('galeria-tarasy')

const renderGallery = () => {
    tarasyLista.forEach(image => {
        const imageContainer = document.createElement('div')
        imageContainer.innerHTML = `<img loading="lazy" class="h-auto max-w-full cursor-pointer" src="${image.imgSrc}" alt="${image.imgAlt}" />`

        galleryContainer.appendChild(imageContainer)
    })
}

renderGallery()
