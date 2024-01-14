var ScriptVars = Java.type('org.zaproxy.zap.extension.script.ScriptVars');
var jsUrl = 'http://192.168.56.1:3000';

function browserLaunched(ssutils) {
	var token = ScriptVars.getGlobalVar("juiceshop.token");
	if (token != null) {
		logger('browserLaunched ' + ssutils.getBrowserId());
		var wd = ssutils.getWebDriver();
		var url = ssutils.waitForURL(5000);
		if (url.startsWith(jsUrl)) {
			logger('url: ' + url + ' setting token ' + token);
			var script = 'document.cookie = \'token=' + token + '\';\n' +
				'window.localStorage.setItem(\'token\', \'' + token + '\');';
			wd.executeScript(script);
		}
	} else {
		logger('no token defined');
	}
}

function logger() {
	print('[' + this['zap.script.name'] + '] ' + arguments[0]);
}
