self.addEventListener("install", installEvent => {
    console.log("install");
    installEvent.waitUntil(
        caches.open("static").then(cache => {   
                return cache.addAll(
                    [
                        "./",
                        "./index.html",
                        "./flex.html",
                        "./grid.html",
                        "./video.html",
                        "./filter.html",
                        "./css/bootstrap.css",
                        "./css/owl.carousel.min.css",
                        "./css/owl.theme.default.min.css",
                        "./css/viewer.css",
                        "./css/style.css",
                        "./images/logo192.png",
                        "./images/logo512.png",
                        "./images/logo.png",
                        "./images/slide1.jpg",
                        "./images/1.jpg",
                        "./images/2.jpg",
                        "./images/3.jpg",
                        "./images/home.mp4",
                        "./js/jquery.min.js",
                        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
                        "./js/viewer.js",
                        "./js/main-new.js",
                        "./js/owl.carousel.js",
                        "./js/index1.js",
                        "./js/owl.js"
                    ]
                ) 
        })
    );
  })


//   self.addEventListener("fetch", fetchEvent => {
//      //console.log(`fatch request: ${fetchEvent.request.url}`);
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })


self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') {
	event.respondWith(fetch(request).catch(function () {return caches.match('offline.html');}));
	return;
  }
  // non-HTML requests: cache, fall back => network
  event.respondWith(
	caches.match(request).then(function (response) {
	  return response || fetch(request).catch(function () {
		// IMAGE request: se offline mostro un placeholder
		if (request.headers.get('Accept').indexOf('image') !== -1) {
         //return caches.match('offline.html');
         return caches.match('offline.html');
		}
	  });
	})
  );
});