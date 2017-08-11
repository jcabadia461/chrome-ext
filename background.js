var TPLIB = 'xxx';
var COMUNJS = false;

function backgroundFunction () {
    return "hello from the background!"
}



chrome.storage.sync.get(["tplib", "mm_base", "comunjs"], function(items){
        TPLIB = items.tplib;
        COMUNJS = items.comunjs;
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
	if(typeof changes.tplib == 'object'){
		TPLIB = changes.tplib.newValue;
	}
	if(typeof changes.comunjs == 'object'){
		COMUNJS = changes.comunjs.newValue;
	}
});


	chrome.webRequest.onBeforeRequest.addListener(
		function(e){
			if(TPLIB === true){
				if(e.url.indexOf('SimpleMediaPlayer.min.js') > 0){
					//return  { cancel: true };
					return {redirectUrl: e.url.replace('SimpleMediaPlayer.min.js', 'lib/SimpleMediaPlayer.lib.js')};
				}
			}
			if(COMUNJS === true){
				return {redirectUrl: 'https://localhost/comun.js'};
			}
		},
		{urls: ["*://*/*/media/simple/js/SimpleMediaPlayer.min.js*", "*://ep01.epimg.net/js/comun/comun.js"]},
		["blocking"]
	);
