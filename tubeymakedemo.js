if (!window['TBY']) {
 var TBY = {loading: 0,loaded: 0};
}
if (!TBY.loading) {
 TBY.loading = 1;
 (function(){
 var l = [];
 TBY.ready = function(f) {if (TBY.loaded) {f(); 
  }else {
   l.push(f);
  }
 };
 window.onTBYReady = function() {
 TBY.loaded = 1;
 for (var i = 0; i < l.length; i++) {
  try {
   l[i]();
  }
   catch (e) {}
 }
};
var newcss='https://clientwindows.com/tubey/tubeymake.css';
var styles=document.createElement('link');
styles.setAttribute('rel','stylesheet');
styles.setAttribute('type','text/css');
styles.setAttribute('media','all');
styles.setAttribute('charset','UTF-8');
styles.setAttribute('href',newcss);
document.head.appendChild(styles);
var a = document.createElement('script');
a.type = 'text/javascript';
a.charset='UTF-8';
a.id = 'gettubey';
a.src = 'https:' + '//clientwindows.com/tubey/tubeydemo.js';
a.async = true;
var b = document.getElementsByTagName('script')[0];
b.parentNode.insertBefore(a, b);
})();}

