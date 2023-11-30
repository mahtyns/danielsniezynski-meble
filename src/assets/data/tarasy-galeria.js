const filesNum = 5;
const tarasyArray = [];

for ( let i = 0; i < filesNum; i++) {
    tarasyArray.push({
        id: i,
<<<<<<< HEAD
        imgSrc: `@/gallery/taras${i+1}.jpg`,
=======
        imgSrc: `/src/assets/images/gallery/taras${i+1}.jpg`,
>>>>>>> parent of 0b245c7... image build
        imgAlt: `Taras ${i+1}`
    })
}

export default tarasyArray