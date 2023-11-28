const filesNum = 168;
const arrayFiles = [];

for ( let i = 0; i < filesNum; i++) {
    arrayFiles.push({
        id: i,
        imgSrc: `/src/assets/images/gallery/img${i+1}.jpg`,
        imgAlt: `Realizacja ${i+1}`
    })
}

export default arrayFiles