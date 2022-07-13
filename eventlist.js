//글쓰기 이벤트
window.onload = () => {
    validAccess(); //유효성 검사
    let password = document.getElementById('password');
    let title = document.getElementById('writingtitle');
    let body = document.getElementById('writingbody');
    //이 셋은 window.onload의 지역변수이지만 실질적 전역변수

    password.onkeydown = () => { //비밀번호 칸에서 버튼누르면
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
    title.onfocus = () => { //제목 칸에 포인터 가면
        if (title.innerHTML == "제목을 입력하세요") {
            title.innerHTML = '';
        }
    }
    body.onfocus = () => { //내용 칸에 포인터 가면
        if (body.innerHTML == "내용을 입력하세요") {
            body.innerHTML = '';
        }
    }
    password.onfocus = () => { //비밀번호 칸에
        if (password.innerHTML == "비밀번호") {
            password.innerHTML = '';
        }
    }
}