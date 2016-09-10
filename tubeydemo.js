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

var tstyles=document.createElement('link');
var tstylesContent=document.createTextNode('video,#ytplayer,div,iframe,#player,#video{height:100vh;width:100vw;height:'+vert+'px;width:'+hori+'px;border:none;z-index:10;}');
tstyles.appendChild(tstylesContent);
tstyles.setAttribute('rel','stylesheet');
tstyles.setAttribute('type','text/css');
tstyles.setAttribute('media','all');
tstyles.setAttribute('charset','UTF-8');
document.head.appendChild(tstyles);

var Pa;function Qa(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.G;c.G=null;a()}};return function(a){d.next={G:a};}};}

var 
c=document.createElement("iframe");
c.setAttribute("style","position: absolute; display:block; z-index: 9999;");
c.setAttribute("frameBorder",0);
c.setAttribute("allowFullscreen","true");
c.setAttribute("allowTransparency","true");
c.setAttribute("allowForms","allow-forms");
c.setAttribute("allowSameOrigin","allow-same-origin");
c.setAttribute("allowPopups","allow-popups");
c.setAttribute("scrolling","no");
c.setAttribute("marginHeight","0");
c.setAttribute("marginWidth","0");
c.setAttribute("seamless","seamless");
c.setAttribute("allowTopNavigation","allow-top-navigation");
c.setAttribute("allowScripts","allow-scripts");
c.setAttribute("title","YouTube ");
c.setAttribute("width","100%");
c.setAttribute("height",vert);
c.style.height=vert;
c.style.width=hori;
c.src=newurl;
document.body.appendChild(c);
})();

