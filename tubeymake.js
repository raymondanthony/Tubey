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
var a = document.createElement('script');
a.type = 'text/javascript';
a.id = 'gettubey';
a.src = 'https:' + '//clientwindows.com/tubey/tubey.js';
a.async = true;
var b = document.getElementsByTagName('script')[0];
b.parentNode.insertBefore(a, b);
})();}

