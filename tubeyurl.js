window.init=(function killer(){if(!c===null){delete c;};})
document.onload=(function (){
//temp fill by prompt
var videoid=prompt('youtube video id (like M7lc1UVf-VE ):','M7lc1UVf-VE');
var x = parseInt(prompt("seek or skip seconds:", "0"), 10);
var y = parseInt(prompt("Clip length in seconds:", "0"), 10);
var startl=parseInt(x,10);
var dur=parseInt(y,10);
var endl = x+y;

// temp prefills
// videoid='M7lc1UVf-VE';startl=100;dur=10;

var hori=0;var vert=0;
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
hori=w;vert=h;
if(hori<150){hori= screen.availWidth;}
 var vert = window.innerHeight;
if(vert<150){vert= eval(hori / 1.25);}

  var newurl='https:\/\/www.youtube.com\/embed\/'+videoid+'?enablejsapi=1&start='+startl+'&end='+endl+'&loop=0&autoplay=1&color=white&controls=1&modestbranding=1&origin=https:\/\/clientwindows.com&autohide=1&fs=1&showinfo=1&rel=1&vol=100&vq=highres';

var newembed=<'iframe src='+'"'+newurl+'"'+' allow-scripts allow-transparency allow-top-navigation allow-popups seamless='+'"'+'seamless'+'"'+' allow-forms allow-full-screen frameborder='+'"'+'0'+'"'+' scrolling='+'"'+'no'+'"'+'></iframe>';
var popupurl=create.window('data:text/html,<html><head></head><body><h2>your embed url is:</h2><h5>'+newembed+'</h5>'</body></html>','embed Url');
})();

