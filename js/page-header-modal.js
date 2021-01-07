const userImgButton = document.querySelector('.user-img');
const userModal = document.querySelector('.user-modal');
const userModalList = document.querySelectorAll('.user-modal li');

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