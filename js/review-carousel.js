//리뷰사진+유저들을 감싼 Div
const reviewCarouselOl = document.querySelector('.user-gallary-section-carousel ol');
//리뷰사진+유저 각각을 querySelectorAll로 받음
const reviewCarouselLi = document.querySelectorAll('.user-gallary-section-carousel ol li');
//왼쪽 화살표
const leftArrow = document.querySelector('.user-gallary-arrows .left');
//오른쪽 화살표
const rightArrow = document.querySelector('.user-gallary-arrows .right');

const thumbnails = document.querySelectorAll('.user-gallary-section-carousel-thumbnail');

const carouselWidth = 520;
const carouselLen = reviewCarouselLi.length;
const carouselSpeed = 300;
let curIndex = 1;

leftArrow.addEventListener('click', () => {
    if(curIndex > 1) {
        curIndex--;
        reviewCarouselOl.style.transition = carouselSpeed + "ms";
        reviewCarouselOl.style.transform = "translate3d(-" + (carouselWidth * curIndex -72) + "px, 0px, 0px)";
        console.log(`index: ${curIndex}`);
        console.log("translate3d(-" + (carouselWidth * curIndex -72) + "px, 0px, 0px)");
    } else if(curIndex === 1) {
        reviewCarouselOl.style.transform = "translate3d(72px, 0px, 0px)";
    } else {
        return 0;
    }
})

rightArrow.addEventListener('click', () => {
    if(curIndex <= carouselLen - 1) {
        reviewCarouselOl.style.transition = carouselSpeed + "ms";
        reviewCarouselOl.style.transform = "translate3d(-" + (carouselWidth * curIndex -72) + "px, 0px, 0px)";
        curIndex++;
        console.log(`index: ${curIndex}`);
        console.log("translate3d(-" + (carouselWidth * curIndex -72) + "px, 0px, 0px)");
    } else {
        return 0;
    }
})

thumbnails.forEach((v, i) => {
    v.addEventListener('click', () => {
        reviewCarouselOl.style.transition = carouselSpeed + "ms";
        reviewCarouselOl.style.transform = "translate3d(-" + (carouselWidth * (i + 1) -72) + "px, 0px, 0px)";
    })
})