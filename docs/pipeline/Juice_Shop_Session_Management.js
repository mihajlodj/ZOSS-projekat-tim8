var COOKIE_TYPE   = org.parosproxy.paros.network.HtmlParameter.Type.cookie;
var HtmlParameter = Java.type('org.parosproxy.paros.network.HtmlParameter')
var ScriptVars = Java.type('org.zaproxy.zap.extension.script.ScriptVars');

function extractWebSession(sessionWrapper) {
	var json = JSON.parse(sessionWrapper.getHttpMessage().getResponseBody().toString());
	var token = json.authentication.token;
	sessionWrapper.getSession().setValue("token", token);
	ScriptVars.setGlobalVar("juiceshop.token", token);
}
    	
function clearWebSessionIdentifiers(sessionWrapper) {
	var headers = sessionWrapper.getHttpMessage().getRequestHeader();
	headers.setHeader("Authorization", null);
	ScriptVars.setGlobalVar("juiceshop.token", null);
}
    	
function processMessageToMatchSession(sessionWrapper) {
	var token = sessionWrapper.getSession().getValue("token");
	if (token === null) {
		print('JS mgmt script: no token');
		return;
	}
	var cookie = new HtmlParameter(COOKIE_TYPE, "token", token);
	var msg = sessionWrapper.getHttpMessage();
	msg.getRequestHeader().setHeader("Authorization", "Bearer " + token);
	var cookies = msg.getRequestHeader().getCookieParams();
	cookies.add(cookie);
	msg.getRequestHeader().setCookieParams(cookies);
}

function getRequiredParamsNames() {
	return [];
}

function getOptionalParamsNames() {
	return [];
}
