const filesNum = 12;
const arrayFiles = [];

for ( let i = 0; i < filesNum; i++) {
    arrayFiles.push({
        id: i,
        imgSrc: import.meta.env.BASE_URL + `/gallery/img${i+1}.jpg`,
        imgAlt: `Realizacja ${i+1}`
    })
}

export default arrayFiles

