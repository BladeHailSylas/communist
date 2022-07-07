//글쓰기 이벤트
const Korcheck = /[ㄱ-ㅎ|ㅏ-ㅣ]/;
window.onload = function () {
    validAccess();
    var password = document.getElementById('password');
    var title = document.getElementById('writingtitle');
    var body = document.getElementById('writingbody');

    password.onkeydown = function () {
        setTimeout(function () {
            if (password.innerHTML.length > 8) {
                alert("비밀번호는 9자리 이상 입력할 수 없습니다.");
                password.innerHTML = localStorage.getItem('passval');
            }
            else {
                localStorage.setItem('passval', password.innerHTML);
            }
        }, 2);
    }
    title.onfocus = function () {
        if (title.innerHTML == "제목을 입력하세요") {
            title.innerHTML = '';
        }
    }
    body.onfocus = function () {
        if (body.innerHTML == "내용을 입력하세요") {
            body.innerHTML = '';
        }
    }
    password.onfocus = function () {
        if (password.innerHTML == "비밀번호") {
            password.innerHTML = '';
        }
    }
}