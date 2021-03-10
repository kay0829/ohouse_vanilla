const searchInput = document.querySelector('.search-form input');
const searchList = document.querySelector('.search-list');
const searchListA = document.querySelectorAll('.search-list li a');
const closeAllButton = document.querySelector('.search-list-history-header button');
const closeButton = document.querySelectorAll('.search-list li button');
const writeForSearch = document.querySelector('.write-for-search');
const writingForSearch = document.querySelector('.write-for-search li');

let search_histories = ['의자', '책상', '에어프라이어'];

//input 클릭이벤트 -> search-list div dropdown
searchInput.addEventListener('mousedown', (e) => {
    if(e.target.value.length === 0 && search_histories.length) {
        searchList.classList.add('show');
        //배열의 value를 li에 담는 과정
        createSearchListA();
    } else {
        searchList.classList.remove('show');
    }
})

//입력된 순서대로 앵커에 검색기록을 담음
function createSearchListA() {
    //4. 배열의 길이가 5이상이면 첫 value 삭제
    if(search_histories.length > 5) {
        search_histories.shift();
        console.log(search_histories);
    }
    search_histories.forEach((v, i) => {
        searchListA[searchListA.length - 1 - i].textContent = v;
    })
    searchListA.forEach((v) => {
        //1. 배열 길이 외에 li는 숨기기
        if(v.textContent.length === 0) {
            v.parentElement.classList.add('hide');
        } else {
            v.parentElement.classList.remove('hide');
        }
    })
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
        //2. 입력하지 않은 채 enter 눌렀을 때 
        if(e.target.value.length === 0) {
            return 0;
        }
        //3. 배열에 있는 text를 다시 한번 검색했을 경우
        if(search_histories.includes(e.target.value)) {
            search_histories.splice(search_histories.indexOf(e.target.value), 1);
            
        }
        searchInput.textContent = e.target.value;
        search_histories.push(e.target.value);
        console.log(search_histories);
        
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

//전체 삭제 클릭 시 배열 초기화 및 모든 li 'hide'
closeAllButton.addEventListener('mousedown', () => {
    search_histories = [];
    console.log(search_histories);
    searchListA.forEach((v) => v.textContent = '');
    searchList.classList.remove('show');
})

//삭제 버튼 클릭 시 해당 text 배열에서 지우고 li 'hide'
closeButton.forEach((v) => {
    v.addEventListener('mousedown', (e) => {
        e.preventDefault();
        search_histories.splice(search_histories.indexOf(v.previousElementSibling.textContent), 1);
        console.log(search_histories);
        v.parentElement.childNodes[1].textContent = '';
        if(v.parentElement.childNodes[1].textContent.length === 0) {
            v.parentElement.classList.add('hide');
        }

        if(search_histories.length === 0) {
            searchList.classList.remove('show');
        }
    })
})

searchInput.addEventListener('blur', () => {
    searchList.classList.remove('show');
})