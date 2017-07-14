"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","be3bd8f86961d2d1476cfbd6a6556de8"],["/static/css/main.4fe10118.css","34c04e1cf6513122959dac0b22a6e9e0"],["/static/js/main.d3af274c.js","a30d5b4a18be37ac9b197bd0d3c88f07"],["/static/media/KohTerai-2017CV-JE.61afe141.pdf","61afe141d2aa47d51ec882bb0506bbed"],["/static/media/audiloid-1.f8705de3.jpg","f8705de3ee74fbf25c9ffb8e3b0834b3"],["/static/media/audiloid-2.4c61ed35.jpg","4c61ed35f4b144cd8bc611a274a3aace"],["/static/media/audiloid-thumb.8ce7d611.jpg","8ce7d611f7bc9bd4c636f1811b49ea77"],["/static/media/commercial-1.9d71bc4a.jpg","9d71bc4a64344f5efda91129b3eafc23"],["/static/media/commercial-2.55322ecf.jpg","55322ecf1252b69dfa150459ababdcea"],["/static/media/commercial-3.f1bb2d93.jpg","f1bb2d93a9d3a684d63ee6eff5006e61"],["/static/media/commercial-4.1bf08995.jpg","1bf08995bd1c49d687a53158a62eb8b1"],["/static/media/commercial-5.c8a3c605.jpg","c8a3c605d38b03a6788dfd66bc41bf11"],["/static/media/commercial-6.931026fa.jpg","931026fa0139013ffba928300cd62632"],["/static/media/commercial-7.468214d7.jpg","468214d73a2235dfbd7f8833151057bd"],["/static/media/commercial-8.0287e7ab.jpg","0287e7abad54b05fec0193477d226bc3"],["/static/media/commercial-9.e61c2562.jpg","e61c25625ef985083a500a1d00511d9d"],["/static/media/commercial-thumb.42d63806.jpg","42d63806b1059415ac730df321cd5adc"],["/static/media/georgia-1.d425ab3a.jpg","d425ab3a8a3580805a99282f1a2bd6f1"],["/static/media/georgia-10.f740b5b0.jpg","f740b5b000ddf0118eb320c6c1658251"],["/static/media/georgia-11.5578f9a4.jpg","5578f9a471470cb52295648911b66845"],["/static/media/georgia-12.0156bc61.jpg","0156bc611154349b98b1f06c01324336"],["/static/media/georgia-13.6c5ffa7b.jpg","6c5ffa7bcd5eba19bb21e2a8e62122f1"],["/static/media/georgia-2.1f09f009.jpg","1f09f0096e0c54ea27c5e91040efadb0"],["/static/media/georgia-3.6b5d8c4b.jpg","6b5d8c4b607715b7369df310b9c44b40"],["/static/media/georgia-4.61a3d7f8.jpg","61a3d7f84c7df5dbb7a41ba06221272b"],["/static/media/georgia-5-5.cbfbd249.jpg","cbfbd249dea8437f90829765c53c0920"],["/static/media/georgia-5.c8d06e8a.jpg","c8d06e8a33729e14f5a755b173ec2edf"],["/static/media/georgia-6.9da2a226.jpg","9da2a226e80431dab0edfe15ebb91c04"],["/static/media/georgia-7.33654c1f.jpg","33654c1faa4cdd23011f7d8ceb6c1e9c"],["/static/media/georgia-8.5fe358e6.jpg","5fe358e6ef1f0f9eeb95c5486a335edf"],["/static/media/georgia-9.d8f3b98c.jpg","d8f3b98cfee9368aa20198a5061c9407"],["/static/media/georgia-thumb.d146b266.jpg","d146b26612b7c178eb44507de3f2097d"],["/static/media/hungrysnake-1.7ab18b30.jpg","7ab18b30c29395307c80970d8d103c81"],["/static/media/hungrysnake-2.7b36d46f.jpg","7b36d46fa887fdd1f10fb27f0a4e971a"],["/static/media/hungrysnake-3.ba09fe97.jpg","ba09fe97e25652b1552f043315991691"],["/static/media/hungrysnake-thumb.00c3e038.jpg","00c3e038cfc8f94c9a98d49ca21c9ce3"],["/static/media/nyuvote-1.3d842e03.jpg","3d842e035f47d2961f53fa2734a52285"],["/static/media/nyuvote-2.b7682ba7.jpg","b7682ba72b2e3c46f258b55f73416865"],["/static/media/nyuvote-3.4a1622f0.jpg","4a1622f041bfe933c00599dc6c854183"],["/static/media/nyuvote-4.78676b9f.jpg","78676b9f1c45cdd099097315903c0196"],["/static/media/nyuvote-5.adbd57f0.jpg","adbd57f072d36335f6b9fe48afac8cb6"],["/static/media/nyuvote-thumb.1558a55d.jpg","1558a55d179dfd210abfe9a3e9667a32"],["/static/media/portrait-1.4a30456d.jpg","4a30456df2fc1e33cbbdfe18b44bae34"],["/static/media/portrait-10.fe2f9509.jpg","fe2f9509d61c7dd26d5024eab7a2a253"],["/static/media/portrait-11.18b4744c.jpg","18b4744cbaed52d727b7d89439021437"],["/static/media/portrait-12.f9060519.jpg","f9060519081e1e7fa7dba3fdbdfc3a18"],["/static/media/portrait-13.08779b59.jpg","08779b595b24b692db4e3a49184e2244"],["/static/media/portrait-14.2b3e5c19.jpg","2b3e5c1981794decd306ebaec05c07b0"],["/static/media/portrait-15.fc42d70f.jpg","fc42d70fd22a4f80d7025407f331ec21"],["/static/media/portrait-2.8518bd30.jpg","8518bd30bd82028a7634cc6e98ebedb1"],["/static/media/portrait-3.fde20a73.jpg","fde20a73608c93cb077d84a5e1dd661c"],["/static/media/portrait-4.0f6358ab.jpg","0f6358abd33ba6fca8583f8513b3cd09"],["/static/media/portrait-5.9603549f.jpg","9603549fe0ab8a49b2969f8d80e39525"],["/static/media/portrait-6.dbee145f.jpg","dbee145f8e86da4abff50dd99b0aa4fd"],["/static/media/portrait-7.fb0cd6d5.jpg","fb0cd6d5350ef983563f2a07670eacc3"],["/static/media/portrait-8.421b85b0.jpg","421b85b01a7d7d22746c486709f1e6d5"],["/static/media/portrait-9.9838f464.jpg","9838f464aae4a79605c538dee9db13ef"],["/static/media/portrait-thumb.da4cc82d.jpg","da4cc82daa90388fd39a549505247f23"],["/static/media/sport-1.5bdfca3e.jpg","5bdfca3eb502c8591d83290ca4712afb"],["/static/media/sport-10.ac31ac74.jpg","ac31ac74d17dc22bfdc9c367b59ed41d"],["/static/media/sport-11.57f27319.jpg","57f273192fa7a5f7e55c4c4d969e933e"],["/static/media/sport-12.ca5b3a5f.jpg","ca5b3a5f8a3c241469f7e33a05bea483"],["/static/media/sport-13.81dc45e1.jpg","81dc45e11d174f02bf27e6766e7c4e17"],["/static/media/sport-2.0a0ec612.jpg","0a0ec612565633560fbf202d9fbabb6f"],["/static/media/sport-3.fc3ae637.jpg","fc3ae637c9a51b7922a8ae3bf4f079eb"],["/static/media/sport-4.30f3c195.jpg","30f3c195ce53b4ffa3ced4bd7047972d"],["/static/media/sport-5.93f4070f.jpg","93f4070f98dfc9b9a2a62bd801890964"],["/static/media/sport-6.db439e51.jpg","db439e510c9471466e6cea5107b6f314"],["/static/media/sport-7.fbaf5219.jpg","fbaf5219b156c82166d27d21d7f237a3"],["/static/media/sport-8.f55f4f23.jpg","f55f4f23429bd08fe49f21f798a8ba97"],["/static/media/sport-9.492b417b.jpg","492b417b664f17d526baf85613010eca"],["/static/media/sport-thumb.18a7d479.jpg","18a7d479ba3b4388abb0e8eef17de19c"],["/static/media/theater-1.38c3fc5b.jpg","38c3fc5b9ba3f292d67f347c939c8593"],["/static/media/theater-2.5ba0e059.jpg","5ba0e05926ba0203627b0aaff74c1436"],["/static/media/theater-3.b0d6189e.jpg","b0d6189e372082abc311b6b54836b7fc"],["/static/media/theater-4.5fc444d9.jpg","5fc444d9467c55ad9eb7d756cf93ab7f"],["/static/media/theater-5.fc11e453.jpg","fc11e4537c02a90e0ef20337f5f68aa0"],["/static/media/theater-6.6f7ff72e.jpg","6f7ff72e8e38165112ddf895b63d9127"],["/static/media/theater-7.0d1c0e7d.jpg","0d1c0e7d289529c2cc1d13c8111ec5a4"],["/static/media/theater-8.51df77aa.jpg","51df77aaa755cc4bbe01494a323cca81"],["/static/media/theater-9.e55f9b23.jpg","e55f9b23d2b2a4c35a0a3d12de491162"],["/static/media/theater-thumb.20e95b1c.jpg","20e95b1ca07a0ba5657167fb313f182d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});