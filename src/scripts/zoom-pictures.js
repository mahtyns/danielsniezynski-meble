const galleryPicturesTarasy = document.querySelectorAll('#galeria-tarasy img');
const galleryPicturesMeble = document.querySelectorAll('#galeria-meble img');
const page = document.querySelector('body')
const pageFirstChild = page.firstChild;

const zoomInPictures = (pic) => {
    const zoomInWrapper = document.createElement('div');
    const imgSrc = pic.getAttribute('src');
    const imgAlt = pic.getAttribute('alt');
    const listClasses = ['bg-black-opacity', 'w-full', 'h-full', 'z-10', 'fixed', 'top-0', 'left-0', 'flex', 'items-center', 'justify-center']
    page.classList.add('overflow-y-hidden')
    zoomInWrapper.classList.add(...listClasses);
    zoomInWrapper.innerHTML = `<img src=${imgSrc} alt=${imgAlt} class="w-[90%] h-auto cursor-pointer" />`
    page.insertBefore(zoomInWrapper, pageFirstChild);
    zoomInWrapper.addEventListener('click', ()=> {
        page.classList.remove('overflow-y-hidden');
        zoomInWrapper.remove()
    })
}


galleryPicturesTarasy.forEach(picture => picture.addEventListener('click', ()=>zoomInPictures(picture)));
galleryPicturesMeble.forEach(picture => picture.addEventListener('click', ()=>zoomInPictures(picture)));

