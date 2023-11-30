export const zoomInPictures = (pic) => {
    const page = document.querySelector('body')
    const pageFirstChild = page.firstChild;
    const zoomInWrapper = document.createElement('div');
    const imgSrc = pic.getAttribute('src');
    const imgAlt = pic.getAttribute('alt');
    const listClasses = ['bg-black-opacity', 'w-full', 'h-full', 'z-10', 'fixed', 'top-0', 'left-0', 'flex', 'items-center', 'justify-center']
    page.classList.add('overflow-y-hidden')
    zoomInWrapper.classList.add(...listClasses);
    zoomInWrapper.innerHTML = `<img src=${imgSrc} alt=${imgAlt} class="w-[90%] h-auto cursor-pointer z-30" />`
    page.insertBefore(zoomInWrapper, pageFirstChild);
    zoomInWrapper.addEventListener('click', ()=> {
        page.classList.remove('overflow-y-hidden');
        zoomInWrapper.remove()
    })
}
