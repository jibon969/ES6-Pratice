const images = [
    'img/1.jpg',
    'img/2.png',
]
let imageIndex = 0;
const img = document.getElementById("carousel-img")
setInterval(()=>{
    if (imageIndex === images.length){
        imageIndex = 0
    }
    const imageLink = images[imageIndex]
    img.setAttribute('src', imageLink)
    imageIndex++;
},  1000)