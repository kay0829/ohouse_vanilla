const productSellingContentOption = document.querySelector('.product-selling-content-option');
const optionButtons = document.querySelector('.buy-buttons');
const optionSmall = document.querySelector('.product-selling-content-option-small');

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
// const addChoice = document.querySelector('.add-choice');
// const cartButton = document.querySelector('.buy-buttons .reverse');
// const buyButton = document.querySelector('.buy-buttons .buy-direct');

const reviewCount = document.querySelector('.product-nav-review-count');
const questionCount = document.querySelector('.product-nav-question-count');

const utils = document.querySelector('.utils');
const utilsItem = document.querySelector('.utils-item');
const userUtils = document.querySelector('.user-utils');

let login = true;

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
let question_count = 96;

window.onload = function() {
    const clonedOption = productSellingContentOption.cloneNode(true);
    const clonedButtons = optionButtons.cloneNode(true);
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const clonedBookmarkDiv = document.createElement('button');
    clonedBookmarkDiv.classList.add('bookmark');
    const clonedBookmark = document.createElement('i');
    clonedBookmark.classList.add('icon-bookmark');
    clonedBookmarkDiv.style.border = '1px solid #E0E2E7';
    clonedBookmarkDiv.style.backgroundColor = '#ffffff';
    clonedBookmarkDiv.style.borderRadius = '4px';
    clonedBookmarkDiv.append(clonedBookmark);
    buttons.append(clonedBookmarkDiv, clonedButtons);

    optionSmall.append(clonedOption, buttons);

    if(!login) {
        utils.removeChild(utilsItem);
        utils.removeChild(userUtils);
        const unauthorizedDiv = document.createElement('div');
        const utilsCart = document.createElement('a');
        const utilsCartIcon = document.createElement('i');
        const signinButton = document.createElement('button');
        const signupButton = document.createElement('button');

        unauthorizedDiv.classList.add('unauthorized-condition');
        utilsCartIcon.classList.add('icon-cart');
        signinButton.textContent = '로그인';
        signinButton.classList.add('signin');
        signupButton.textContent = '회원가입';
        signupButton.classList.add('signup');
        utilsCart.append(utilsCartIcon);
        unauthorizedDiv.append(utilsCart, signinButton, signupButton);
        utils.append(unauthorizedDiv);
    }

    companyName.textContent = '보야르';
    // productName.innerHTML = '레트로한 감성이 묻어 나는 / 온도 조절과 타이머는 안 되지만 오로지 감성 하나로 승부 보는 / 강아지와 고양이가 겸손해지는 / 캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)';
    productName.innerHTML = '캠핑/가정용 400W 미니멀 전기히터<br/> VO-HTO15(안전장치기능탑재)';
    reviewStar.forEach((v, i) => {
        if(i + 1 <= review_rate) {
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
    if(sold_out) {
        cartButton.textContent = '재입고 알림받기';
        buyButton.textContent = '품절';
        buyButton.setAttribute('disabled', '');
    }

    reviewCount.textContent = review_number;
    questionCount.textContent = question_count;
}