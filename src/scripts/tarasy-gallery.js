import { tarasyLista } from "../assets/data/tarasy-galeria";

const galleryContainer = document.getElementById('galeria-tarasy')


const renderGallery = () => {tarasyLista.forEach(image => {
    const imageContainer = document.createElement('div')
    imageContainer.innerHTML = `<img class="h-auto max-w-full rounded-lg cursor-pointer" src="${image.imgSrc}" alt="${image.imgAlt}" />`

    galleryContainer.appendChild(imageContainer)
})
}

renderGallery()
