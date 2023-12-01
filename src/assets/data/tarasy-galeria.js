export const getGalleryTarasy = (photoIndex) => {
    const filesNum = 5;
    const tarasyArray = [];

    for (let i = photoIndex; i < filesNum; i++) {
        tarasyArray.push({
            id: i,
            imgSrc: `gallery/taras${i + 1}.jpg`,
            imgAlt: `Taras ${i + 1}`
        })
    }
    return tarasyArray;
}