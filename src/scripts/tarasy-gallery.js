import tarasyArray from "../assets/data/tarasy-galeria";

const galleryContainer = document.getElementById('galeria-tarasy')

const renderGallery = () => {
    tarasyArray.forEach(image => {
        const imageContainer = document.createElement('div')
        imageContainer.innerHTML = `<img loading="lazy" class="w-full h-[450px] cursor-pointer hover:brightness-90 object-cover" src="${image.imgSrc}" alt="${image.imgAlt}" />`

        galleryContainer.appendChild(imageContainer)
    })
}

renderGallery()
