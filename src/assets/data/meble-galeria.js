// import img1 from '../images/gallery/kuchnia1.jpg'
// import img2 from '../images/gallery/kuchnia2.jpg'
// import img3 from '../images/gallery/kuchnia3.jpg'
// import img4 from '../images/gallery/kuchnia4.jpg'
// import img5 from '../images/gallery/lazienka.jpg'
// import img6 from '../images/gallery/meble.jpg'

// export const mebleLista = [
//     {
//         id: 0,
//         imgSrc: '/src/assets/images/gallery/kuchnia1.jpg',
//         imgAlt: 'Kuchnia 1'
//     },
//     {
//         id: 1,
//         imgSrc: img2,
//         imgAlt: 'Kuchnia 2'
//     },
//     {
//         id: 2,
//         imgSrc: img3,
//         imgAlt: 'Kuchnia 2'
//     },
//     {
//         id: 3,
//         imgSrc: img4,
//         imgAlt: 'Kuchnia 2'
//     },
//     {
//         id: 4,
//         imgSrc: img5,
//         imgAlt: 'Kuchnia 2'
//     },
//     {
//         id: 5,
//         imgSrc: img6,
//         imgAlt: 'Kuchnia 2'
//     },
// ]

const filesNum = 12;
const arrayFiles = [];

for ( let i = 0; i < filesNum; i++) {
    arrayFiles.push({
        id: i,
        imgSrc: `/src/assets/images/gallery/img${i+1}.jpg`,
        imgAlt: `Realizacja ${i+1}`
    })
}

export default arrayFiles