'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"manifest.json": "b3564da907371d69e14f922191606a63",
"icons/Icon-192.png": "3ed1b082cef2714f39d937999190b321",
"icons/Icon-maskable-192.png": "3ed1b082cef2714f39d937999190b321",
"icons/Icon-512.png": "01336808795f7ad83da98e039eed603f",
"icons/Icon-maskable-512.png": "01336808795f7ad83da98e039eed603f",
"assets/fonts/MaterialIcons-Regular.otf": "76b7cfc85f83047138f26443a5e1a3f1",
"assets/assets/sad.png": "23e270a2631f1eca473e5e3f9f82817a",
"assets/assets/left.jpg": "54cd87cc60aa95d2f852036690058270",
"assets/assets/mother.jpg": "6e391c9d6e977896d35e7d5ca130ab29",
"assets/assets/numbers_diagram.jpg": "f9d6c96bd5de0ef858bb37aeb8a6ca78",
"assets/assets/140.png": "56fa3f30ba1e2726bed2ab1a609d35e6",
"assets/assets/sun.png": "32d22f0203b44dfdc8cd14766534d7b9",
"assets/assets/Transportaion_diagram.jpg": "377bade83808037d2b3d99c8bbd7c5ee",
"assets/assets/truck.png": "d0f8176e7f8735ffee7f2bc7a40ccfbf",
"assets/assets/house2.png": "45cbff79a12abae9d5531928ec5803f6",
"assets/assets/ear.png": "0719f27e67ba588ad782f9a2015ebd1d",
"assets/assets/table.png": "4c85d4dcb0f9c26d91be2b5b80aee5b2",
"assets/assets/big.jpg": "51b9da9169c9a55f71e20db8604440e1",
"assets/assets/lion.png": "8d13f8abd44dcc840c54cca900742e42",
"assets/assets/bodyparts.jpg": "308e88f089905ea936e309572c39c247",
"assets/assets/cat.png": "40db67054a4b975944cd80201ba00a48",
"assets/assets/basket.png": "141bfa6952a9e2f835f47e82b07a08a6",
"assets/assets/bridge.png": "a0145f7fa34ce7e9d58d8a70907970df",
"assets/assets/objects2.jpeg": "9a3d38b18f2ebb493ff9240ff620af17",
"assets/assets/green.png": "e2141f8f28e016bb22cd3bfd7e205e2b",
"assets/assets/63.png": "f02f1eda9595a77cc52f09df36b6dc84",
"assets/assets/bottle.png": "e96f125200ffa4af62177a45ea13face",
"assets/assets/seventy_eight.png": "084786933207a46af1e5f6ce1208e13c",
"assets/assets/fork.jpg": "9c98848fab16dbda75cd90783fafe3c8",
"assets/assets/ship.png": "81c8205a4bbccd610b7cc06387b98e17",
"assets/assets/elevator.png": "553eca2ab228526643390135cc542064",
"assets/assets/flag.png": "57ff13cd33b11b245a4f79a05d01573e",
"assets/assets/gas_pump.png": "92fffb4bb170e3983e4104061b9c069b",
"assets/assets/bench.png": "dd70af3913f456617bc859d8399195b3",
"assets/assets/rock.png": "9959f13c2459caf4cb0ef877628eb80a",
"assets/assets/brother.jpg": "1e9a02088aac21f1eff7e9a75ce702ae",
"assets/assets/house1.png": "d4dea0089eccd8a927881ce8c5b891df",
"assets/assets/T-shirt.jpg": "06cb908bf83b31a914df5fbb5c00e468",
"assets/assets/train.png": "38623ad9ef1d8e6d0c37acd6a68e9e65",
"assets/assets/bparts.jpg": "4b33ccaf6b7e2c48e2b4ac7b9cd8cf4c",
"assets/assets/humanparts.jpg": "951cda7cffcd92159e3126228af91d0b",
"assets/assets/Household.jpg": "0afabb2d36d3dddbd350a1dfbd391474",
"assets/assets/forty_five.png": "42c8f143a5f190cb7b6ee368d7d84bc9",
"assets/assets/train.jpg": "eab6d49a045dc23662601bc2c8725286",
"assets/assets/family_tree.jpg": "8ac4c36e6bc9bb71ca8fcc99eb214f4f",
"assets/assets/24.png": "824cc915db22f4f2540dd53d0467db12",
"assets/assets/robotAI.png": "eb59914b230e9f60b338840ae596e558",
"assets/assets/blue.png": "ba781f800bae113dc5914a1101b48d13",
"assets/assets/moon.png": "76ea3d6fcd288bf1557ca3ccd66bd5a2",
"assets/assets/bus.png": "ef6255f21fd8ff0770bdf14085d51a3a",
"assets/assets/utensils.jpg": "c85426de7c5a22b742a13160c85d92a3",
"assets/assets/Pan.jpg": "d794f92bc44bb35c5c0ebc290ecb8090",
"assets/assets/phone.jpg": "8aad677e819cde8bdda79b7174855598",
"assets/assets/Hat.jpg": "96947d853fd8353e67222fa9fc1a4fa3",
"assets/assets/objects1.jpeg": "f9473b7c1e9d462778bf2ca5f0fec252",
"assets/assets/dog.png": "5c1ea72f24ee1fe8cb11dc7398453227",
"assets/assets/fork&k.png": "6b029e3365e840c4f770c8a63af16be5",
"assets/assets/church.png": "b522bc18c40ff6aab18711f768b41b22",
"assets/assets/tree.png": "db6ca12331730b2cd7b25630d454324b",
"assets/assets/red&blue.jpg": "a2e3449d716bfb364b7cad72b28cacfc",
"assets/assets/star.png": "94952c9dcd698a576575c157199164a3",
"assets/assets/sofa.jpg": "b74ba71e22623561f5c95c2ac3dc4684",
"assets/assets/chair.png": "02ec8772f04835b4616827e61ee9705f",
"assets/assets/door.png": "65b54fdf4f73fd73404aa4527cefdf30",
"assets/assets/airplane.jpg": "1a0b06fd59ddd534d92b02ea644a0642",
"assets/assets/red.jpg": "b43cdcd548fd3046994f66abcf845c80",
"assets/assets/ulogo.png": "a5df9740af1309d5ffef29689d583346",
"assets/assets/plant.png": "dd566415be404572823f59d23310d32b",
"assets/assets/spoon.png": "792a415dc25befca48417ec451aa844b",
"assets/assets/water.png": "06ac2f6cb37af235b3a1f6dc40e14b2d",
"assets/assets/directios.jpeg": "606e811a9ac5832c9fb3ac4b76168009",
"assets/assets/up.jpg": "8ce0c48ac0216421e038cebb48be5d5a",
"assets/assets/trash_can.png": "f843551a5f985e0546aa302a1ea59fc1",
"assets/assets/house.png": "b616a774c74ee7feb6996afc5b8af25a",
"assets/assets/tv.jpg": "99eb44318bf7c602fb20670d173d2c2c",
"assets/assets/Shoes.jpg": "8901967a8f869e0a5718702507504cde",
"assets/assets/ladder.png": "4a7f3f99d317f121f286331f87cd14a0",
"assets/assets/trans3p.jpg": "cbb9735d8662e7f68460634486f7dc6d",
"assets/assets/go.jpg": "daeda3fa56b4cab6c59513cd03758a10",
"assets/assets/fridge.png": "fd8be932faede0412db742fb48afe5a4",
"assets/assets/keys.png": "dbb12b4935682e7d91dcf738c41ee135",
"assets/assets/object4.jpg": "d1fc16795f694535c2b622059e90bcfd",
"assets/assets/brush.png": "01320fe501a0406ea5ec0e392e10db63",
"assets/assets/clock.png": "2c2191fe7a0c538fea7e19f9011a7861",
"assets/assets/eyes.jpg": "b74ba2703d6372f680db4a1686856f37",
"assets/assets/days.jpg": "78d95f951269ec7d984c5dae94f2ac3f",
"assets/assets/cup.png": "f4b9966d42aac66b5f664acf245ba3f0",
"assets/assets/plate.png": "d0394ef069b2b8d10b022082b3dd0961",
"assets/assets/mouth.jpeg": "b94e645f2751352eac67f44e12c56543",
"assets/assets/street.jpg": "498f751f7bc112d9c70890b08a76f75f",
"assets/assets/Hand.png": "fa181379e5a75aa28c3bb9c4a185d37e",
"assets/assets/hammer.png": "e80560a1877a8f690540aedf5eceacc9",
"assets/assets/mirror.png": "f37db77a3ed6617d7d54e6ee098cc832",
"assets/assets/kitchen.jpg": "e1ec6ad9564bd156c055ddfbc6546334",
"assets/assets/shopping_cart.png": "75500cb7a32355acbccec4126f56c0ba",
"assets/assets/one_hundred_seventy.png": "d9f155ff458cdfe9debb10bfca2b4db5",
"assets/assets/bathroom.jpg": "772ff7efa4cf7abc956cb7117cc7a3df",
"assets/assets/traffic_light.png": "a9e1d9897be835ce4ead8e323437bc1a",
"assets/assets/bed.png": "0f7afeaba85c4e21232aa0006fafb86a",
"assets/assets/happy.png": "1d6f40a8bae2e622a9886893e63272d2",
"assets/assets/colors_diagram.jpg": "30940a06a6dd8878c43422007ecb96d4",
"assets/assets/bag.jpg": "5d9f0a81e89ea1a3f84e079b3a95c174",
"assets/assets/object3.jpg": "cdcd1dc811b005c26a012c307b545403",
"assets/assets/atm_machine.png": "15c6f80e2854681dbeff706d60fb770c",
"assets/assets/places1.jpg": "23e0404dc86c46268c6bd227918c73d2",
"assets/assets/mailbox.png": "49227498367c59468a8c0f48f6a027aa",
"assets/assets/rain.png": "1f90ef95524051c1ee5514d9d03f86aa",
"assets/assets/helmet.png": "b38548f9a6eeefb438b1abb7ead5a5d4",
"assets/assets/fire.png": "6bc5fe65d8772f16c79ff23c291d999d",
"assets/assets/bread.png": "cad3f96546606c709e331426d6f7123b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "43ec238fc1372a5f2d1b72d143f3d044",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin.json": "46ce398c87d4c1ad93dd1271b90fd258",
"assets/NOTICES": "5e8c4e667c6497f16f9882dca7b1c9d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "5b3e2fa430b729f3178a714084ed2a30",
"/": "5b3e2fa430b729f3178a714084ed2a30",
"flutter_bootstrap.js": "248105744cf744853e51c1e1f16a6078",
"web-app-manifest-192x192.png": "3ed1b082cef2714f39d937999190b321",
"main.dart.js": "83488a42d50a0ee9bce8f0d2a31cb795",
"version.json": "575865225a856bf83d25053c0f4661a9",
"site.webmanifest": "b3564da907371d69e14f922191606a63",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.ico": "4c1b4e10e67afe26d95f50854a9bf571",
"apple-touch-icon.png": "4aaf21050ac56e6031a19f5b0250d424",
"favicon-96x96.png": "faf34fdc2b857e7bc96c43457fae8ecd",
"favicon.svg": "18a54751ad36c4d36c7be966673c2420",
"web-app-manifest-512x512.png": "01336808795f7ad83da98e039eed603f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
