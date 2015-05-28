// app
var appName = 'Sample';

var port = process.env.PORT ? process.env.PORT : 3000;
var webPrefix = '';
var staticHost = process.env.OPENSHIFT_NODEJS_PORT + process.env.OPENSHIFT_NODEJS_IP;
var serverIp = process.env.OPENSHIFT_NODEJS_PORT + process.env.OPENSHIFT_NODEJS_IP;
var serverPath = process.env.OPENSHIFT_NODEJS_PORT + process.env.OPENSHIFT_NODEJS_IP;
var urlWeb = '';
var ip =  process.env.IP || '127.0.0.1';

module.exports = {
  page : {
    staticHost: staticHost,
    serverIp: serverIp,
    serverPath: serverPath,
    appName: appName,
  },

  serverPath: 'http://' + serverPath,
  webPrefix: webPrefix,
  port: port,
  staticHost: staticHost,
  urlWeb : urlWeb
}
