export const getGalleryMeble = (photoIndex) => {
    const filesNum = 15;
    const mebleArray = [];

    for (let i = photoIndex; i < filesNum; i++) {
        mebleArray.push({
            id: i,
            imgSrc: `gallery/img${i + 1}.jpg`,
            imgAlt: `Meble ${i + 1}`
        })
    }
    return mebleArray;
}