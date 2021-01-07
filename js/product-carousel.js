const previewList = document.querySelectorAll('.product-selling-preview-list li');
const previewListHover = document.querySelectorAll('.product-selling-preview-list li button::after');
const carouselList = document.querySelectorAll('.product-selling-carousel li');

let carouselLength = previewList.length;

previewList.forEach((v, i) => {
    v.addEventListener('mouseover', () => {
        carouselList[i].classList.remove('hide');
        for(let j = 0; j < carouselLength; j++) {
            if(j !== i) {
                carouselList[j].classList.add('hide');
            }
        }
    })
})