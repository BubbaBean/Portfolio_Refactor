"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Portfolio_Refactor/index.html","adb7e88106a4084c1c7af56985d7cfd9"],["/Portfolio_Refactor/static/css/main.d4847574.css","e76f5cefba6d8e19572b99f20606e156"],["/Portfolio_Refactor/static/js/main.03c259aa.js","d675a893f878fe185f67cb9bfa756302"],["/Portfolio_Refactor/static/media/BeatBot.8ad19783.png","8ad19783d71e7a776d93600f4e3f4d27"],["/Portfolio_Refactor/static/media/Dumbbells_Donuts.45dd9458.png","45dd9458c8a2ead455cb3094870bb17e"],["/Portfolio_Refactor/static/media/Game of Words.bd2abc38.png","bd2abc38f59829ef96b89aee294229d4"],["/Portfolio_Refactor/static/media/Instagram-icon.8cb29526.png","8cb29526a9349e3d4e5a23adb75f173f"],["/Portfolio_Refactor/static/media/Mars_Rover.7069310d.png","7069310dd8bb83628ca53e70e14e204a"],["/Portfolio_Refactor/static/media/github_logo.dc0baf7b.png","dc0baf7ba98096fbf1b4e0f604c6a52a"],["/Portfolio_Refactor/static/media/javascript_calculator.4e483621.png","4e48362100b6bb3e8028ed857f2ea24b"],["/Portfolio_Refactor/static/media/music-sharing-app-react.0884b6a0.png","0884b6a04444f65092c16a93adc248b2"],["/Portfolio_Refactor/static/media/profile_pic.11663342.jpg","11663342b7d09cca70ce14e86bbbc716"],["/Portfolio_Refactor/static/media/runks_bunks_screenshot.826fb504.png","826fb5049e5a7fd1f2b5f77523864a49"],["/Portfolio_Refactor/static/media/scrum-monkey.4572678c.png","4572678cd1c2c84ea0e941b1f6262b4a"],["/Portfolio_Refactor/static/media/twitter-logo.df78d1b8.jpg","df78d1b87dab326883a55768a0c5032c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Portfolio_Refactor/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});