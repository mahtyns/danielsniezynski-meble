const filesNum = 12;
const arrayFiles = [];

for ( let i = 0; i < filesNum; i++) {
    arrayFiles.push({
        id: i,
<<<<<<< HEAD
        imgSrc: `../gallery/img${i+1}.jpg`,
=======
        imgSrc: `/src/assets/images/gallery/img${i+1}.jpg`,
>>>>>>> parent of 0b245c7... image build
        imgAlt: `Realizacja ${i+1}`
    })
}

export default arrayFiles

