const companyName = document.querySelector('.company-name');
const productName = document.querySelector('.product-name');
const reviewStar = document.querySelectorAll('.review-star i');
const reviewNumber = document.querySelector('.review-number a');
const priceBody = document.querySelector('.product-selling-content-header-price');
const priceWrap = document.querySelector('.product-price-wrap');
const productPrice = document.querySelector('.product-price .number');
const dcPercent = document.querySelector('.product-dc-percent .number');
const beforeDcPrice = document.querySelector('.product-before-dc-price .number');
const pointGuide = document.querySelector('.point-guide span');
const deliveryFee = document.querySelector('.delivery-fee');
const addChoice = document.querySelector('.add-choice');

//경우의 수
let review = true;
let review_rate = 4;
let review_number = 566;
let product_price = '49,900';
let discount = true;
let dc_rate = 34;
let dc_price = '32,900';
let point = 987;
let delivery_fee = true;
let single_option = false;
let sold_out = false;

window.onload = function() {
    companyName.textContent = '보야르';
    // productName.innerHTML = '레트로한 감성이 묻어 나는 / 온도 조절과 타이머는 안 되지만 오로지 감성 하나로 승부 보는 / 강아지와 고양이가 겸손해지는 / 캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)';
    productName.innerHTML = '캠핑/가정용 400W 미니멀 전기히터<br/> VO-HTO15(안전장치기능탑재)';
    reviewStar.forEach((v, i) => {
        if(i + 1 <= review_rate) {
            console.log(i);
            v.style.color = '#3DA8F5';
        } else {
            v.style.color = 'inherit';
        }
    })

    if(review) {
        reviewNumber.textContent = `${review_number}개 리뷰`;
    } else {
        reviewNumber.textContent = '리뷰쓰기'
        reviewNumber.style.color = '#858896';
        const firstReview = document.createElement('a');
        firstReview.textContent = '첫 리뷰 두 배 적립';
        firstReview.setAttribute('href', '#');
        firstReview.classList.add('first-review');
        reviewNumber.parentElement.append(firstReview);
    }

    if(discount) {
        dcPercent.textContent = dc_rate;
        beforeDcPrice.textContent = product_price;
        productPrice.textContent = dc_price;
        const specialPrice = document.createElement('span');
        specialPrice.textContent = '특가';
        specialPrice.classList.add('special-price');
        productPrice.parentElement.append(specialPrice);
    } else {
        productPrice.textContent = product_price;
        priceBody.removeChild(dcPercent.parentElement);
        priceWrap.removeChild(beforeDcPrice.parentElement);
    }

    pointGuide.textContent = `${point}P`;

    if(delivery_fee) {
        deliveryFee.textContent = '2,500원 (50,000원 이상 구매시 무료배송)';
        deliveryFee.classList.remove('.delivery-fee');
        deliveryFee.classList.add('add-fee');
    } else {
        deliveryFee.textContent = '무료배송';
    }

    if(single_option) {
        addChoice.parentElement.removeChild(addChoice);
    }
}