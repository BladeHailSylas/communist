nowDay = () => { //시간
    const today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
}

writtenId = (V) => document.getElementById(V).textContent;

docs = (title, body, pass, day) => [title, body, pass, day]

explore = () => docs(writtenId('writingtitle'), writtenId('writingbody'), writtenId('password'), nowDay()/*IP 추가예정*/);

focusing = (Location, Value) => {
    if (new String(document.getElementById(Location).innerHTML) == '') {
        document.getElementById(Location).innerHTML = Value;
    }
}

nofirm = () => { //작성취소
    const V = confirm('작성 중인 글을 삭제하고 이전 페이지로 돌아갑니까?');
    if (V == true) {
        alert('글이 작성되지 않았습니다.');
        location.replace(document.referrer);
    }
}

yesfirm = () => { //작성완료
    let V = confirm("작성을 완료하시겠습니까?");
    let P = document.getElementById('password').innerHTML;
    if(P == '비밀번호' || P == '') {
        const C = confirm('비밀번호를 작성하지 않으셨습니다. 확인을 누르시면 비밀번호를 무작위로 설정하게 됩니다.');
        if(C == true){
            document.getElementById('password').innerHTML = setPasscode(8);
        }
        else {V = false;}
    }
    if (V == true) {
        alert("글이 업로드되었습니다.");
        link.connect = getConnection(err);
    }
}

validAccess = () => { //접근 유효성 검사(validate)
    //var V = localStorage.getItem('token'); 토큰 이용처 추가 시 사용
    if (localStorage.getItem('token') != 'true') { //localstorage의 변형은 글쓰기 버튼에서
        alert("유효하지 않은 접근입니다.");
        history.back(); //뒤로
    }
    else { localStorage.setItem('token', 'false'); }
}

setPasscode = N => { //비밀번호 무작위 설정자
    let P = '';
    for(var I = 1; I <= N; I+=1){
        P += new String(getRandomInt(0, 9)); //비밀번호는 string으로 처리
    }
    return P;
}

getRandomInt = (min, max) => { //란돔 값 설정자
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

import { createConnection } from 'mariadb';
var link = createConnection({
    host: '127.0.0.1',
    user: 'administ',
    password: 'jeong2958',
    database: 'docs'
});

getConnection = err => {
    if(err) throw err;
    console.log('Good to go');
    link.query('INSERT INTO documents VALUES (?, ?, ?, ?)', explore(), function(err, result) {
        if(err) throw err;
        console.log('Inserted value' + explore());
    });
}