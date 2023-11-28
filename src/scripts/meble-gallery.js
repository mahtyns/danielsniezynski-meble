import arrayFiles from "../assets/data/meble-galeria";

const galleryContainer = document.getElementById('galeria-meble')


const renderGallery = () => {arrayFiles.slice(0,6).forEach(image => {
    const imageContainer = document.createElement('div')
    imageContainer.innerHTML = `<img loading="lazy" class="w-full h-[450px] cursor-pointer hover:brightness-50 object-cover" src="${image.imgSrc}" alt="${image.imgAlt}" />`

    galleryContainer.appendChild(imageContainer)
})
}

renderGallery()

const showMoreButton = document.getElementById('meble-see-more')

const importAllImages = (context) => context.keys().map(context);
const galleryImages = importAllImages(require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/));