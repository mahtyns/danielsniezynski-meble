const filesNum = 5;
const tarasyArray = [];

for ( let i = 0; i < filesNum; i++) {
    tarasyArray.push({
        id: i,
        imgSrc: `@/gallery/taras${i+1}.jpg`,
        imgAlt: `Taras ${i+1}`
    })
}

export default tarasyArray