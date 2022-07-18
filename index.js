const dbConn = require('./connector.js');
dbConn.makingConnection()
.catch((errMsg) => {
    console.log(errMsg);
});