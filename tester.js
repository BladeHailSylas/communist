const conn = require('./connector.js');
const interaction = require('./Interactor.js');

/*const readline = require('readline');
const { parse } = require('path');

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let title, body, password;
let input = []
console.log('글 입력: 양식은 (제목)/(내용)/(비밀번호) 순입니다.');
readl.on('line', (line) => {
    input = line.split('/').map(el => parse(el));
    readl.close();
});

readl.on('close', () => {
    title = input[0].name;
    body = input[1].name;
    password = input[2].name;
    console.log(`Successfully inserted Documents: title ${title}, body ${body}, password ${password}, date ${nowDay()}`);
    A.insertValue(title, body, password, nowDay());
    process.exit();
})*/