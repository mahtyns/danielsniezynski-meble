import { mebleLista } from "../assets/data/meble-galeria";

const galleryContainer = document.getElementById('galeria-meble')


const renderGallery = () => {mebleLista.forEach(image => {
    const imageContainer = document.createElement('div')
    imageContainer.innerHTML = `<img loading="lazy" class="h-auto max-w-full cursor-pointer" src="${image.imgSrc}" alt="${image.imgAlt}" />`

    galleryContainer.appendChild(imageContainer)
})
}

renderGallery()

const showMoreButton = document.getElementById('meble-see-more')

