const userImgButton = document.querySelector('.user-img');
const userModal = document.querySelector('.user-modal');
const userModalList = document.querySelectorAll('.user-modal li');
const choice = document.querySelector('.product-selling-content-option-choice .product-choice');
const choiceModal = document.querySelector('.product-selling-content-option-choice .option-choice-items ul');
const choiceModalHeader = document.querySelector('.product-selling-content-option-choice .option-choice-items ul div');
const choiceModalList = document.querySelectorAll('.product-selling-content-option-choice .option-choice-items ul li');
const addChoice = document.querySelector('.product-selling-content-option-add-choice .add-choice');
const addChoiceModal = document.querySelector('.product-selling-content-option-add-choice .option-choice-items ul');
const addChoiceModalHeader = document.querySelector('.product-selling-content-option-add-choice .option-choice-items ul div');
const addChoiceModalList = document.querySelectorAll('.product-selling-content-option-add-choice .option-choice-items ul li');

const sellingChosenItem = document.querySelector('.product-selling-content-option-chosen-item');
const totalPrice = document.querySelector('.product-total-price .number');

let total_price = [0, 0, 0];

userImgButton.addEventListener('click', () => {
    userModal.parentElement.classList.toggle('show');
    userModal.classList.toggle('show');
})

userModalList.forEach((v) => {
    v.addEventListener('mousedown', (e) => {
        e.preventDefault();
        // window.location.href = `/${v.textContent}`;
    })
})

userImgButton.addEventListener('blur', () => {
    userModal.parentElement.classList.remove('show');
    userModal.classList.remove('show');
})

choice.addEventListener('mousedown', () => {
    choiceModal.classList.toggle('show');
    choiceModalHeader.classList.remove('disabled');
})

addChoice.addEventListener('mousedown', () => {
    addChoiceModal.classList.toggle('show');
    addChoiceModalHeader.classList.remove('disabled');
})

let choice_click_flag = false;

choiceModalList.forEach((v, i) => {
    let click_flag = false;
    v.addEventListener('mouseover', (e) => {
        e.preventDefault();
        choiceModalHeader.classList.add('disabled');
    })
    v.addEventListener('mousedown', () => {
        let price = [32900, 32900];
        choice_click_flag = true;
        if(click_flag) {
            alert('이미 선택한 옵션입니다');
        } else {
            click_flag = true;
            const sellingItemOption = document.createElement('article');
            const sellingItemName = document.createElement('h2');
            sellingItemName.textContent = v.textContent;
            const sellingItemButton = document.createElement('button');
            const sellingItemIcon = document.createElement('i');
            sellingItemIcon.classList.add('icon-close');
            sellingItemButton.append(sellingItemIcon);
            const sellingItemOptionControls = document.createElement('div');
            const sellingItemQuantaty = document.createElement('select');
            for(let i = 0; i < 10; i++) {
                const number = document.createElement('option');
                number.setAttribute('value', `${i}`);
                number.textContent = i + 1;
                sellingItemQuantaty.append(number);
            }

            const sellingItemPrice = document.createElement('p');
            const sellingItemPriceNumber = document.createElement('span');
            const won = document.createElement('span');
            sellingItemPriceNumber.textContent = price[i];
            won.textContent = '원';
            won.classList.add('won');
            sellingItemPrice.append(sellingItemPriceNumber, won);

            total_price[i] = sellingItemPriceNumber.textContent;
            console.log(total_price);
            totalPrice.textContent = total_price.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);

            sellingItemQuantaty.addEventListener('click', () => {
                sellingItemPriceNumber.textContent = price[i] * sellingItemQuantaty[sellingItemQuantaty.selectedIndex].textContent;
                total_price[i] = sellingItemPriceNumber.textContent;
                console.log(total_price);
                totalPrice.textContent = total_price.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
            })

            sellingItemButton.addEventListener('click', () => {
                sellingChosenItem.removeChild(sellingItemOption);
                click_flag = false;
                total_price[i] = 0;
                console.log(total_price);
                totalPrice.textContent = total_price.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
            })

            sellingItemOptionControls.append(sellingItemQuantaty, sellingItemPrice);
            sellingItemOption.append(sellingItemName, sellingItemButton, sellingItemOptionControls);
            sellingChosenItem.append(sellingItemOption);
        }
    })
})

addChoiceModalList.forEach((v, i) => {
    let click_flag = false;
    v.addEventListener('mouseover', (e) => {
        e.preventDefault();
        addChoiceModalHeader.classList.add('disabled');
    })
    v.addEventListener('mousedown', () => {
        let price = [40000];
        if(!choice_click_flag) {
            alert('필수 옵션을 하나 이상 선택해야 합니다');
        } else {
            if(click_flag) {
                alert('이미 선택한 옵션입니다');
            } else {
                click_flag = true;
                const sellingItemOption = document.createElement('article');
                const sellingItemName = document.createElement('h2');
                sellingItemName.textContent = v.textContent;
                const sellingItemButton = document.createElement('button');
                const sellingItemIcon = document.createElement('i');
                sellingItemIcon.classList.add('icon-close');
                sellingItemButton.append(sellingItemIcon);
                const sellingItemOptionControls = document.createElement('div');
                const sellingItemQuantaty = document.createElement('select');
                for(let i = 0; i < 10; i++) {
                    const number = document.createElement('option');
                    number.setAttribute('value', `${i}`);
                    number.textContent = i + 1;
                    sellingItemQuantaty.append(number);
                }
    
                const sellingItemPrice = document.createElement('p');
                const sellingItemPriceNumber = document.createElement('span');
                const won = document.createElement('span');
                sellingItemPriceNumber.textContent = price[i];
                won.textContent = '원';
                won.classList.add('won');
                sellingItemPrice.append(sellingItemPriceNumber, won);
    
                total_price[choiceModalList.length + i] = sellingItemPriceNumber.textContent;
                console.log(total_price);
                totalPrice.textContent = total_price.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
    
                sellingItemQuantaty.addEventListener('click', () => {
                    sellingItemPriceNumber.textContent = price[i] * sellingItemQuantaty[sellingItemQuantaty.selectedIndex].textContent;
                    total_price[choiceModalList.length + i] = sellingItemPriceNumber.textContent;
                    console.log(total_price);
                    totalPrice.textContent = total_price.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
                })
     
                sellingItemButton.addEventListener('click', () => {
                    sellingChosenItem.removeChild(sellingItemOption);
                    click_flag = false;
                    total_price[choiceModalList.length + i] = 0;
                    console.log(total_price);
                    totalPrice.textContent = total_price.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
                })
    
                sellingItemOptionControls.append(sellingItemQuantaty, sellingItemPrice);
                sellingItemOption.append(sellingItemName, sellingItemButton, sellingItemOptionControls);
                sellingChosenItem.append(sellingItemOption);
            }
        }
    })
})

choice.addEventListener('blur', () => {
    choiceModal.classList.remove('show');
    choiceModalHeader.classList.remove('disabled');
})

addChoice.addEventListener('blur', () => {
    addChoiceModal.classList.remove('show');
    addChoiceModalHeader.classList.remove('disabled');
})