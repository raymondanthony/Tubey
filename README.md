# Tubey
===

YouTube Embed API Pick a Video,Start and End Time, and Magically Creates it in Any Website


Yes, this **will** get around typical X-Frame blocks. 


1 line of javascript ```https://clientwindows.com/tubey/tubeymake.js```

demo version javascript ```https://clientwindows.com/tubey/tubeymake.js```


>Note both are demo versions really for the moment. The input is currently 3 prompt boxes that ask for video identifier, start time in seconds, end time in seconds, and from there the embed code is generated and then injected full screen or 90% of the containing window or frame-say if running in jsbin, or an IDE. 


Presently this has 2 components of JS the loader thats tubeymake.js, it loads the actual tubey.js . tubymakedemo.js loads tubeydemo.js and tubymake.css. tuby.html and tubeydemo.html are sample html containers that show you what you can expect. tubeyurl.js is not tested or plugged to anything but is a start at a embed code generator for saving to later, exporting to downloader, or sharing embeds that handles settings and time calculations to fill out the arguments easily without going to youtube or some adware site. I was going to do that part as an api in node when i have a minute. Also note I just wrote all of this in the past few hours so its, barely tested and probably a bit rough codewise. Just a proof of concept to myself.


The two versions differ mostly by way of how opinionated the CSS is. IT's not been tested in any sites as of yet, I would expect once that happens the main version will have to drop most styles accept whats necessary. The demo version expects to be loaded in a blank page more or less and so it more agressively inserts some flare. 


I'll have to merge it with tubey bash for a seamless downloading system. I typically drop playlists or videos into tubey bash functions and downloading is automatic. This embed replaces the v2 API and should lend itself better to feeding into video archiver programs, and modifiers. Personally I'd like to feed it by specific time segments as it does, into a GIF animation script. I've made a few and tried a couple, but think its should be easier and produce less load. We'll see!

[ray anthony](@rayantony) [raymond anthony org](@raymondanthony) [twitter](//twitter.com/rayanthonyrcc)

<img src="https://clientwindows.com/ua-mailer.png" height="1" width="1" alt="">
