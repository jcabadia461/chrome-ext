function injectJs(link) {
        var scr = document.createElement("script");
        scr.type="text/javascript";
        //scr.src=link;

        scr.innerHTML = "console.log('jajaja');";

        (document.head || document.body || document.documentElement).appendChild(scr);
}

chrome.storage.sync.get(["tplib", "mm_base"], function(items){
      var scr = document.createElement("script");
        scr.type="text/javascript";
        if(items.tplib === true){
        	scr.innerHTML = "window.tplib = '" + items.tplib + "';";
        }
        if(items.mm_base){
        	scr.innerHTML+= "window.mm_base = '" + items.mm_base + "';";
        }
        (document.head || document.body || document.documentElement).appendChild(scr);
});
