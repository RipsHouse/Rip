var port = (process.env.VMC_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('http');
var runRip = true;

global.mMongoHost               = "localhost";//host of mongodb, usually localhost or 127.0.0.1
global.mMongoDatabase           = "turntable";//mongocollection for bot.
//global.mMongoDatabase           = "tt_new";//mongocollection for bot.
global.mMongoUser               = "TTUser";//user of mongocollection
global.mMongoPass               = "password";//password to mongocollection
global.mMongoPort               =  27017;//Port, this is default

global.mMySQLHost = "localhost";
global.mMySQLDatabase = "tt_mysql";
global.mMySQLUser = "TTUser";
global.mMySQLPass = "password";
global.mMySQLPort = 3306;

if(process.env.VCAP_SERVICES){
  var env = JSON.parse(process.env.VCAP_SERVICES);
  var mongo = env['mongodb-1.8'][0]['credentials'];
  var mysql = env['mysql-5.1'][0]['credentials'];
  
  global.mMongoHost = mongo.hostname;
  global.mMongoDatabase = mongo.db;
  global.mMongoUser = mongo.username;
  global.mMongoPass = mongo.password;
  global.mMongoPort = mongo.port;
  
  global.mMySQLHost = mysql.hostname;
  global.mMySQLDatabase = mysql.db;
  global.mMySQLUser = mysql.username;
  global.mMySQLPass = mysql.password;
  global.mMySQLPort = mysql.port;
}

http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write("Starting Rip");
        res.end('\n');
        if(runRip)
        {
                runRip = false;
                rip = require('./config.js');
        }        
}).listen(port, host);