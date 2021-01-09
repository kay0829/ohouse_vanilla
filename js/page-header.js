const searchInput = document.querySelector('.search-form input');
const searchList = document.querySelector('.search-list');
const searchListA = document.querySelectorAll('.search-list li a');
const closeAllButton = document.querySelector('.search-list-history-header button');
const closeButton = document.querySelectorAll('.search-list li button');
const writeForSearch = document.querySelector('.write-for-search');
const writingForSearch = document.querySelector('.write-for-search li');

document.cookie = "search_historyies=";
let search_histories = ['의자', '책상', '에어프라이어'];

//input 클릭이벤트 -> search-list div modal
searchInput.addEventListener('mousedown', (e) => {
    if(e.target.value.length === 0 && search_histories.length) {
        searchList.classList.add('show');
        createSearchListA();
    } else {
        searchList.classList.remove('show');
    }
})

//입력된 순서대로 앵커에 검색기록을 담음
function createSearchListA() {
    if(search_histories.length > 5) {
        search_histories.shift();
        putCookie();
        console.log(search_histories);
    }
    search_histories.forEach((v, i) => {
        searchListA[searchListA.length - 1 - i].textContent = v;
    })
    searchListA.forEach((v) => {
        if(v.textContent.length === 0) {
            v.parentElement.classList.add('hide');
        } else {
            v.parentElement.classList.remove('hide');
        }
    })
}

function putCookie() {
    document.cookie = "search_historyies=";
    let temp = search_histories.join(',');
    document.cookie += 'search_historyies='+temp+';';
    console.log(document.cookie.length)
}

//input 입력이벤트 -> search-list div modal 막고, 입력하는 내용 표시
searchInput.addEventListener('input', (e) => {
    searchList.classList.remove('show');
    writeForSearch.classList.add('show');
    writingForSearch.innerHTML = `<i class="icon-search"></i> ${e.target.value}`;
    if(e.target.value.length === 0) {
        writeForSearch.classList.remove('show');
    }
})

//input 엔터이벤트 -> modal 닫고, 배열에 담고, url 바꿈
searchInput.addEventListener('keydown', (e) =>{
    if (e.keyCode === 13) {
        writeForSearch.classList.remove('show');
        if(e.target.value.length === 0) {
            return 0;
        }
        if(search_histories.includes(e.target.value)) {
            search_histories.splice(search_histories.indexOf(e.target.value), 1);
            putCookie();
        }
        searchInput.textContent = e.target.value;
        search_histories.push(e.target.value);
        console.log(search_histories);
        putCookie();
        // window.location.href = `q?=${e.target.value}`;
    }
})

searchListA.forEach((v) => {
    v.addEventListener('click', () =>{
        console.log(v.textContent);
        searchInput.value = `${v.textContent}`;
        search_histories.splice(search_histories.indexOf(v.textContent), 1);
        search_histories.push(v.textContent);
        console.log(search_histories);
        searchList.classList.remove('show');
    })
})

//전체 삭제 클릭 시 모든 li 삭제
closeAllButton.addEventListener('mousedown', () => {
    search_histories = [];
    console.log(search_histories);
    putCookie();
    searchList.classList.remove('show');
})

closeButton.forEach((v) => {
    v.addEventListener('mousedown', (e) => {
        e.preventDefault();
        search_histories.splice(search_histories.indexOf(v.previousElementSibling.textContent), 1);
        console.log(search_histories);
        putCookie();
        searchList.removeChild(v.parentElement);

        if(search_histories.length === 0) {
            searchList.classList.remove('show');
        }
    })
})

searchInput.addEventListener('blur', () => {
    searchList.classList.remove('show');
})