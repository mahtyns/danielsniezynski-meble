export const zoomInPictures = (arr, ind) => {
    const page = document.querySelector('body')
    const pageFirstChild = page.firstChild;
    const zoomInWrapper = document.createElement('div');
    const pic = arr[ind]
    const imgSrc = pic.getAttribute('src');
    const imgAlt = pic.getAttribute('alt');
    const listClasses = ['bg-black-opacity', 'w-full', 'h-full', 'z-10', 'fixed', 'top-0', 'left-0', 'flex', 'items-center', 'justify-center']
    page.classList.add('overflow-y-hidden')
    zoomInWrapper.classList.add(...listClasses);
    zoomInWrapper.innerHTML = `<img src=${imgSrc} alt=${imgAlt} class="w-auto h-[85%] object-cover cursor-pointer z-30" />`
    page.insertBefore(zoomInWrapper, pageFirstChild);
    
    zoomInWrapper.addEventListener('click', ()=> {
        page.classList.remove('overflow-y-hidden');
        zoomInWrapper.remove()
    })

    const handleExit = (event) => {
        if (event.type === 'keydown' && event.key === 'Escape') {
            page.classList.remove('overflow-y-hidden');
            zoomInWrapper.remove()
        }
    }

    const handleArrows = (event) => {
    if (event.key === 'ArrowLeft') {
        zoomInWrapper.innerHTML = '';
        if (ind === 0) {
            ind = arr.length - 1; 
        } else {
            ind -= 1; 
        }

        const pic = arr[ind];
        const imgSrc = pic.getAttribute('src');
        const imgAlt = pic.getAttribute('alt');
        zoomInWrapper.innerHTML = `<img src=${imgSrc} alt=${imgAlt} class="w-auto h-[85%] object-cover cursor-pointer z-30" />`;
    }
    else if (event.key === 'ArrowRight') {
        zoomInWrapper.innerHTML = '';
        if (ind === arr.length - 1) {
            ind = 0; 
        } else {
            ind += 1; 
        }
        const pic = arr[ind];
        const imgSrc = pic.getAttribute('src');
        const imgAlt = pic.getAttribute('alt');
        zoomInWrapper.innerHTML = `<img src=${imgSrc} alt=${imgAlt} class="w-auto h-[85%] object-cover cursor-pointer z-30" />`;
    }
};


    document.addEventListener('keydown', handleExit)
    document.addEventListener('keydown', handleArrows)
}
