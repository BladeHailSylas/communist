import{mysql, link} from DBlink;

const val = require('Interactor.js');

link.connect(function(err) {
    if(err) console.log(err);
    console.log('A');
})

var send = 'INSERT INTO documents(title, body, password, date) VALUES ?';

module.exports = send;