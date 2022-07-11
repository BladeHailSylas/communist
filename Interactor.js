function nowDay() { //시간
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
}

function writtenId(V) { //해당 id의 내용을 불러옴
    return document.getElementById(V).textContent;
}

function docs(title, body, pass, day, ip) { //글의 정보를 읽음
    return {
        title,
        body,
        pass,
        day,
        ip
    };
}

function explore() { //글의 정보를 return, DB 연동에 사용.
    var docinfo = docs(writtenId('writingtitle'), writtenId('writingbody'), writtenId('password'), nowDay(), 'none');
    return docinfo;
}

function focusing(Location, Value) { //onfocusout에 사용. 빈 칸을 특정 텍스트로 채운다
    if (new String(document.getElementById(Location).innerHTML) == '') {
        document.getElementById(Location).innerHTML = Value;
    }
}


function nofirm() { //작성취소
    var V = confirm('작성 중인 글을 삭제하고 이전 페이지로 돌아갑니까?');
    if (V == true) {
        alert('글이 작성되지 않았습니다.');
        location.replace(document.referrer);
    }
}

function yesfirm() { //작성완료
    var V = confirm("작성을 완료하시겠습니까?");
    var P = document.getElementById('password').innerHTML;
    if(P == '비밀번호' || P == '') {
        var C = confirm('비밀번호를 작성하지 않으셨습니다. 확인을 누르시면 비밀번호를 무작위로 설정하게 됩니다.');
        if(C == true){
            document.getElementById('password').innerHTML = setPasscode(8);
        }
        else {V = false;}
    }
    if (V == true) {
        alert("글이 업로드되었습니다.");
        console.log(explore()); //글을 DB에 업로드
        //location.replace(document.referrer);
    }
}

function validAccess() { //접근 유효성 검사(validate)
    //var V = localStorage.getItem('token'); 토큰 이용처 추가 시 사용
    if (localStorage.getItem('token') != 'true') { //localstorage의 변형은 글쓰기 버튼에서
        alert("유효하지 않은 접근입니다.");
        history.back(); //뒤로
    }
    else { localStorage.setItem('token', 'false'); }
}

function setPasscode(N) { //비밀번호 무작위 설정자
    var P = '';
    for(var I = 1; I <= N; I+=1){
        P += new String(getRandomInt(0, 9)); //비밀번호는 string으로 처리
    }
    return P;
}

function getRandomInt(min, max) { //란돔 값 설정자
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}