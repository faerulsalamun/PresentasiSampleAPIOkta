// app
var appName = 'Sample';

var port = rocess.env.OPENSHIFT_NODEJS_PORT;
var webPrefix = '';
var staticHost = process.env.OPENSHIFT_NODEJS_IP + process.env.OPENSHIFT_NODEJS_PORT;
var serverIp = process.env.OPENSHIFT_NODEJS_IP + process.env.OPENSHIFT_NODEJS_PORT;
var serverPath = process.env.OPENSHIFT_NODEJS_IP + process.env.OPENSHIFT_NODEJS_PORT;
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
