function nowday() {
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
}

function writtenid(V) {
    return document.getElementById(V).textContent;
}

function docs(title, body, day) {
    return {
        title,
        body,
        day
    };
}

function explore() {
    var docinfo = docs(writtenid('writingtitle'), writtenid('writtenbody'), nowday());
    alert(docinfo);
}

function nofirm() {
    var v = confirm('작성 중인 글을 삭제하고 이전 페이지로 돌아갑니까?');
    if (v == true) {
        alert('글이 작성되지 않았습니다');
        history.back();
    }
    else { }
}

function yesfirm() {
    var V = confirm("작성을 완료하시겠습니까?");
    if (V == true) {
        //데이터베이스를 여기서 연동, 글을 업로드
        alert("글이 업로드되었습니다.");
        location.replace(document.referrer);
    }
    else { }
}

function validAccess() {
    var v = localStorage.getItem('token');
    console.log(v);
    if (v != 'true') {
        alert("유효하지 않은 접근입니다.");
        history.back();
    }
    else { localStorage.setItem('token', 'false'); }
}