export const getGalleryMeble = (photoIndex) => {
    const filesNum = 12;
    const mebleArray = [];

    for (let i = photoIndex; i < filesNum; i++) {
        mebleArray.push({
            id: i,
            imgSrc: `gallery/img${i + 1}.jpg`,
            imgAlt: `Taras ${i + 1}`
        })
    }
    return mebleArray;
}