let myCacheData = "quiz_cache_data";
let cachesAllFiles = ["/", "/index.html",
    "/offline.html", "/image/favicon.ico","/offlinelogo.png",
    "/static/js/0.chunk.js", "/static/js/bundle.js",
    "/static/js/main.chunk.js",
    "/static/media/front.782c3359.jpg",
    "/static/media/logo.5d5d9eef.svg"];


//  install service worker 

this.addEventListener("install", (install_event) => {
    install_event.waitUntil(
        caches.open(myCacheData)
            .then((cache) => {
                console.log("cache is opened now");

                return cache.addAll(cachesAllFiles);
            })
    )
});

// listen/get all requests (below comment out codes are 100% OK and send offline.html page)
this.addEventListener("fetch", (request_event) => {
    request_event.respondWith(
        caches.match(request_event.request)
            .then(() => {
                return fetch(request_event.request)
                    .catch(() => caches.match("offline.html"))
            })
    )

})
/*

this.addEventListener('fetch', (e) => {
    e.waitUntil(
        this.registration.showNotification("Notification", {
            body: "Assalam-o-Alaikum from Salahuddin"
        })
    )}
)


/*
// listen all requests
this.addEventListener('fetch', (e) => {
    console.warn("url now man", e.request.url)
  if(!navigator.onLine) {

   // this.addEventListener("fetch", (e)=> {
    if(e.request.url==="http://localhost:3000/static/js/main.chunk.js")
        {
        e.waitUntil(
        this.registration.showNotification("Notification", {
        body:"Assalam-o-Alaikum from Salahuddin",
        icon:"https://as2.ftcdn.net/jpg/02/08/66/31/500_F_208663198_4ndALSgydZTAS7TGK41L83D9EzcN5rU0.jpg"
                    })
                );
           }
    e.respondWith(
      caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then((response) => {
                  return caches.open(myCacheData ).then((cache) => {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    ); 
    }
  });
*/
// activate the service worker
this.addEventListener("activate", (activate_event) => {
    let cacheArray = [];
    cacheArray.push(myCacheData);

    activate_event.waitUntil(
        caches.keys().then((mycachedata) => Promise.all(
            mycachedata.map((cachedata) => {
                if (!cacheArray.includes(cachedata)) {
                    return caches.delete(cachedata);
                }
            })
        ))
    )
});

