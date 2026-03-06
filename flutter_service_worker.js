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
"flutter_bootstrap.js": "1f9a844147b4269a91111cd5fe9b055a",
"web-app-manifest-192x192.png": "3ed1b082cef2714f39d937999190b321",
"main.dart.js": "dfefd223f4eb35a4d5a8ce0184784e9c",
"version.json": "575865225a856bf83d25053c0f4661a9",
"site.webmanifest": "b3564da907371d69e14f922191606a63",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.ico": "4c1b4e10e67afe26d95f50854a9bf571",
"apple-touch-icon.png": "4aaf21050ac56e6031a19f5b0250d424",
"favicon-96x96.png": "faf34fdc2b857e7bc96c43457fae8ecd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/heads/master": "dff631d7899328ecdf4922266f2416f6",
".git/refs/remotes/origin/master": "dff631d7899328ecdf4922266f2416f6",
".git/config": "248fe1875128de25ef6488063439cd86",
".git/logs/HEAD": "0e6fb70d6875d7e7df44fa093449ee7b",
".git/logs/refs/heads/master": "0e6fb70d6875d7e7df44fa093449ee7b",
".git/logs/refs/remotes/origin/master": "8aacd940b240628dfec8497a308e4dba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "82536e4e2e7c7011a61d34d97774bed0",
".git/index": "718c7b44a8adc0aaaf2e696f3ac2ffd9",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/b9/d88f33ef435956495d937b96688d3dfbcc6f08": "9e2d347af8a024766dc88ba7ecd1347a",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/64/9b13d05242e3571b2d069a66c19b0bb1694fc3": "8a87edffbe553a4caeef8322777a9664",
".git/objects/3d/9e54df3a81a6efc7f3c4862f394f8dd308f6b6": "284fe63bd46be50c43cd4a748f450ede",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/e79c90f32c04f9836b3cb2b9bd3e49f7d48ab6": "3d6ed7b8444c87817d53bafc198687ce",
".git/objects/a4/d41084bce5228cfab5e6f51c25eabb4c13ded8": "d17befa5355fe5238cc268e6d97d5c03",
".git/objects/68/ba79a548aeb2abd9442533b401598ff8411690": "30a9f5e5f2c2c3a07deb9ba84b4ffd4e",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/38aac6c980a919e123b6c042903ec540cb8a01": "57842da415394612d2d45382fe356476",
".git/objects/a9/61cbb50223c0711294ca8be7afb26664645cb8": "686d64cdae7c2270f0e88c6aa80fa0cc",
".git/objects/3e/2ab9d3a5e100f3dcd64063cdac32e087645edc": "9dfba1308c2cbd0b6032e07e354e8397",
".git/objects/09/4ed8fc31f60bdd924c85b31945a4402a587498": "b3c6e94fae100961cdb4639098e8814d",
".git/objects/62/8d77b28dcad62d645f0ac5b9cea23728fee6cb": "a07d5b36675486d60e0417d57e980478",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/5e/ee803a18680055a499a16aeb374c5562166f45": "84a8a91558c198417cbba2413e943ef5",
".git/objects/40/7aba6b121bffc66ccadb74dfd78ae61723b3dc": "6fe2c2aa8ee63d5516ec064b2f99073c",
".git/objects/ef/477769e314924ac26ab7de0d0e10a7f123310a": "811a17999c06d8ad3ded64ec58a0be51",
".git/objects/ef/14f7cd7722c481b388334017abfafb1a2775dc": "c3f8c35c7dd63d82ca5c26ed01445068",
".git/objects/56/659539b59c6b5d955c7acff40f574f40bbb58a": "4418c1de828ea5e36049a6de09ecdd75",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/819dd5ecdc538a148e17283a9e53d973f6d2d5": "3c554cad3a5a8079db51ce1f334ae303",
".git/objects/e0/5fffd759b1879dffc5e8bb348c34534a58a12d": "a78c007bf9f1a7471f1487fe6847bc72",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/bb/9bee7106fa14e09a9073e3c9da7030507a9bb8": "7bd50109c49f3375b4bf0fe6a092041f",
".git/objects/bb/03ee292ec3860c0512bd503dfc635f3ff62db3": "33820af69c514fb9af91c811ab10f930",
".git/objects/d7/c5d7e8bb2de61425abbb0296aafc7e57ee89bd": "2d98b89a38eea7ccc85b406d3f390119",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/5d/b0faf2442ba61b0193432350db2419fe860548": "ae2e161b4d7dbb53ee623ea6ab5d23bf",
".git/objects/9f/86840d8b5eb668faaf78a83588e833a948b3ae": "77dae6cb10ec4ddb6e9f73c6e4b2d308",
".git/objects/fa/e7225fe1690ff303fdd201d84e1d841d33e91e": "21fd6e166efb06733e53893949dea03a",
".git/objects/85/aeecf7d1d7934d5ba09ddd5eadc415f56b054a": "687b223677401cabd07d0f9f48af0191",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/18/067b38b8b2a5de70d0ca448e324a127993471a": "09344719aedea1f54d1d1684927bf87c",
".git/objects/2f/1edf7d5fdd55c957a3da9e5717af737ecacce3": "c7596f65064adc775c03ede76eb0bcba",
".git/objects/81/5f617bac1bbfda89f02cf8a8ebd6a8dbf4c48c": "279aeb9ccd233b8b26908cbae596b980",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/cf/5c18600b1c7aaa69d96e7dfe6d5e541e843992": "ddbdd76f6fbbf13c197adf21ef2ce12a",
".git/objects/c0/4e8656c6cdfdf118bc2a8098619f45fca5f9b4": "65062e3081a9c10e8bbdd8fddeffba0d",
".git/objects/89/8d4b151456e6afc20dea5870232c8d7d249c11": "62df40494d809deee39e3461877b82b6",
".git/objects/60/f9fbaed25ba5a330f6a91d959223e1f8e6153e": "28ca0e782fa5f688b7be2a9d75a9f25e",
".git/objects/60/9f78a8c20a3761efad5f8e75190bec5a741da7": "7e7fbf8956980efcf98bfedb0e3cdcba",
".git/objects/0e/d4cb0bab2e4bc83a4d505ba7e403116a843692": "1d9d7488da11673c272ba3620003cb3d",
".git/objects/ee/250740534ccc5511eb8a0ddcd65a3ed8a27940": "aaf27d6094be3824892e3612ae794fcb",
".git/objects/97/17fd3fa4b61844c842bf9a0af5dcdba985e34e": "e0d45bf56006ff4b02d9ee75a27dcdb5",
".git/objects/97/07568474ead1d16759c0df2a0181a5590b32e7": "a4f6a388a2f73258821d3a09bb490839",
".git/objects/83/cd874c732fd0801b1955a1e3011bbf9d1117c1": "0eb2d09f977831e16d4d2ca690f89939",
".git/objects/50/2cac49f95acf9df719a3406c163c3a2ce7e520": "af521042757bd8a820e6e2b1d82bd604",
".git/objects/16/56116845081ebd7841294656fd54d63bf1dc98": "295a5efec1e3da61dab294543229dd30",
".git/objects/9b/273be65b63834aa55b553039a4bfdf2ebad0db": "01cf2a8ed1d83b4f6ca68235f8df353b",
".git/objects/34/deb228a14bf081c3fec5381afaf9378790d05c": "760ecb71913fc7201ddfc4e63e1a820b",
".git/objects/0c/185dad4650e213911f5a7410ca359bf822b209": "460d518a69edf1270c7e47e3b1cc9eb2",
".git/objects/f0/821a46477feb46a277de4749a31e47ff313dea": "c905bdbcb75adca680e600839e348c9c",
".git/objects/f0/876059dfc7a597a45c3051a65890d3e515fe2e": "1d20fb68e8f344064e844d8c0d605dbe",
".git/objects/ff/8bde2b202d4bd418be219ad00655c918c927f0": "ac03282e5149c9373afe0f2dbd8db335",
".git/objects/46/ae89550fd1941a0c7ae85267eb7f77810e067a": "cfc05796fff7050d152a7db7c7679b72",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/7e/37ccf1740fc736b567188e205df23c337356f6": "3d0b66be2870eedaf9978c5a2bcfb544",
".git/objects/76/dde35b6238b84ea66ee9265732653b56721f81": "57b46f58cc46f979f0bd969f6af02c98",
".git/objects/76/5dcc32238720d1c8178e95447b8d4667344721": "a924f3c83f382709e0e364bd19f2fc8a",
".git/objects/bf/b166af84ae6a95ef1ed9b809caeaf98d9595d5": "c190255a82b9b61e1cfd9da1fa8b4db6",
".git/objects/42/8f2ffd4c854bc4032431323289f4a63da21ea7": "f1b051ae678a6c69a6856bbddf06c147",
".git/objects/42/48bddba2f8527c00954b036d7d22b9e3c5a2cb": "427a0ac340fb3d38e72bfb95f793f765",
".git/objects/ae/4f62dad7649725aa0d1cef99cd6ac5623bd563": "aafa81b77a2390c79d5dc9a0b9901860",
".git/objects/db/9a213063bc3d92c1c59b1f689da0422423d14f": "dfc6d1161e3f53fe3b2734bfdf9d1bd3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/f5/614bb94df00252ac2461dbeb97e12783f86ace": "a3896e6bb5eb0bbefcd2e31f08dcd0d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/8f/bdfba0c39a954f57e3b9aa1be87ba4800d322a": "5f85e3b004fe8a20d5f508b4c37f10b7",
".git/objects/da/902a4a314f818fe6cdd223e903d6ca6b336f4f": "397463220af51cbc80003af68059de15",
".git/objects/7a/7bc9da8168f5602d14a2eb458d700b9caac952": "6b2ed740f4e5a4ff3044b6b908c8711f",
".git/objects/13/194af8ab99964bc44cbb2f9ab343d0ad166f15": "94ea2637b7db857686eaef658df743e1",
".git/objects/13/6ffc998d13699456fbca00d593d36a6b68b1c2": "0f2deb65f4d11578ff374a90554f239f",
".git/objects/1b/d3f8732e3e67b940c9148b91516728d9846101": "99e941be939ec6783cab972cbac254f0",
".git/objects/55/c9c0a2b7bb942ae1eda7179665f43a93eb1e61": "54e7d49e06ab9747ece62522bac6f435",
".git/objects/f1/72f0389e628970170714efad4bf896ae7e9260": "75a1a6d12665dc7c76009c4d7eacbf3c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/93/de8e597bbf500eb623ebf6cb8ec16610f08233": "595aa57916d757da7aadec49aa7414c6",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/19/0bf8de269c29e69bbf09e29e859a9439830a95": "552ca10c79890b45f7b8b7f3ae98bb99",
".git/objects/19/04474b0ef92df5eefd8ec4a6e0f1cde76e4f20": "73c395ae9067d17c112f22651fe82f53",
".git/objects/3a/5d64af59c668da40a8a409377c9c4f0f043f75": "04e46ec70d995d574cbcf15f79fa9901",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/a1/c65ef439f7b522fb2bb696879a0e8a0796bdb7": "97b5c0d2fb8d142bbdf593d41ea3ec7e",
".git/objects/a1/c91a1018683a70e0f388562f2b63d965898d50": "fadc454baa2c51e843ce43dc55c989b7",
".git/objects/88/93f2657175ca16eb9fc4de77affdeaa5a7e62f": "d5c97a68a1e8e46919f3c8dd5f93cda9",
".git/objects/8d/6f73dd7cf033681b15d3e2597feca7a49e3766": "95c2eef17cf632084357974e1d66aeb5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/d6/4a9a7b3bb86a22821ac377faff2b1e42cc939e": "0a37a5861c26427e324cffcc02c231c2",
".git/objects/95/1ef91560ee06978177717c00b741df5b454829": "1b7248be80b835068d89a842d0c7ddfd",
".git/objects/95/0ec2acfaaab15eae55cc03bbbffdaf20c8e0c2": "2148d0a90333c7ccea9c69972b415190",
".git/objects/7d/ed818be3ebef3060c7c5c36e6648bf4d2be705": "6343f6950ee69cfac17a90a210af25c8",
".git/objects/22/49635b737e366aff91032a592a7f0dfdde0353": "c21501fa141f983ab8d4893bae4672c6",
".git/objects/d5/b489f7bbf82d121d231ef3271d676def53aac8": "0ab45d219fdad7e40d18b98e65ebf4ac",
".git/objects/b2/67c6334170d9e2acb309b85580f6807780a0b7": "cc981e215454b7cdbed6813f8c19bf74",
".git/objects/45/313867e63cd0700bf773a06a57c368c8a86276": "5d2903067e36a2bd3b29dcb35f1b945a",
".git/objects/45/9ab0467992a96da811a355dbdbdca89b98a86f": "35efcf19caf64a0fa8d4e8d9240ed132",
".git/objects/45/8944e0c0c0d989746aeaff2efce71ad350f9b6": "5fe2e1a07b8e88ad9ba0541787c7f089",
".git/objects/00/fff271e13c9241d2f7ee2a49906016d5251693": "f656f9cd734e6d478b68282ba9f17c94",
".git/objects/29/0699ffc494ec7c89520fd71bd982f72e458097": "bf4a2a6b7bace86235d1351e9b3bbcdf",
".git/objects/98/a388297928351e0e58a11414f4a0ef1b035aef": "34a206e32d8e303738a8240c707e1fec",
".git/objects/98/959a09f8fb101d7acc0bd3a1a6ddaf18d41568": "a8c376fc3fe8eaf9fa1d76c1678efc76",
".git/objects/4e/2499a2deeb1d736394cdcb0ccee759d03eace8": "a0906d0c788343ca71fd282956535fc5",
".git/objects/6a/59c01cd3a9bc8357d71913ec2d226d5219e6fc": "165f078255b1e5946d00bfcf39443103",
".git/objects/11/d2273c22a39d0e9fb46895f5048ac7d825f4d4": "3cce653f44c5760057adb61de4e970f2",
".git/objects/44/0635f8c976de0b64cda3496d967cd9fa6a9f4f": "8f1a370db52d9890bfe9163b903580ed",
".git/objects/f3/9be99d599b145f6a2d4d4ce9cb0f133b5eec26": "bf726a7ea4250545400e8c347eef5df0",
".git/objects/f3/d4240608b106a3d5ace2d7b2b5bd20224f3518": "0f0a1eccef5aa0e69ff6cdabc22c1018",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/de/9f9d000cd614c7cebc5637a753477aa8ba2ed0": "5795e6aa704fdb146f6a90e30936cbae",
".git/objects/03/48f9df87025595404658716acf3c484f9374ed": "29b7aa0b9aebbdde83872f82802971c0",
".git/objects/c3/ec4551f15e17989159e483e1e563154e2c4127": "f521615db6e3e59e30355b5e8f1f8af4",
".git/objects/38/0fe06e737c92deaad4d46b45003521cf45a411": "9245e51b954d1f0342cadfab40dfc233",
".git/objects/38/e4bdb6bb4b783438286b9033989a75779a9a08": "45759659b5400751970ef8d233de6794",
".git/objects/38/42c1e4ac9420df6d4f1995993fe8a8d2c01e0c": "ae61a15ff972fca21e13e0a57b0d4d3b",
".git/objects/38/ef652928eba83422d0fea61170d6bfb7a1697a": "c71add6917880bda59759ddc0d4125c5",
".git/objects/ac/bc3a6b7c607fd0dbb027e311fc43c0f27f9367": "b6a28e5e5a7129c5de8462bf92d89001",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/d3/fa9d5ccefc7a2656d9a5cd050a57a2c3bebc03": "a06cfc912038e087f3989fabbec29667",
".git/objects/d3/9dd955fc2e69837ab19f7430a4b3e81ce2d38b": "e0c23b9c52dd041268d72a542c618ea1",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/b5/917b353ed16dcb5ea311390c35600272599912": "ea718938b099c3624a725bcc360b256e",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/15/fdeed38b126e1f60d0f875e4f08ffbd904ce5c": "dec30b407001d589bd61bafec890ff60",
".git/objects/78/28e2981148a73038cb967ac3c53124aa06352d": "73b3925ff7c0e43504540c0657bcaea6",
".git/objects/1e/4518d306dc01af220553d3626e42972201607b": "d6e924e8a0b1274372088b7fc7844e8d",
".git/objects/b8/2a8229d4b0d2bb78e60219c4ec90f80d7e29be": "4ab5429c18ad3076643f132af93719ea",
".git/objects/ea/94b24e2886d2feab4859d0118ce0d5b63abf99": "bac8beb34a2a669a7d8b9ffc3efb2fd1",
".git/objects/b6/6f8cf2b242080f71ee586501274f5ce74afc8a": "c3ba5e61cd648d43b661657aab710d5b",
".git/objects/b3/d013d1684902b570ab9ee681830e20dd3f844c": "f8a48cb7a2251130f1446f518b97cfad",
".git/objects/72/e964dacbb40db7c6ebddea48e4bbdc7af75a1d": "eb9180aae26cdde96efb1eb121e46ce7",
".git/objects/25/b8de4ac71ececd78cff49d4933389756fba431": "9849acd067c145d1b76297f6dc8b3528",
".git/objects/8c/294c6abd91ab5900b5788d9c5c3b3895730897": "aab0a07f2354d4cdadb135169afc6b7c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/3c/7bcad00310f9ab1438a714efaab73342e802a7": "c4dbb398f8ba54fc83291abb9f1db864",
".git/objects/2a/a168e9cf9d3f0316429d7540bd788fc0921729": "6cf6d97b1f319d15b69d01165ea97c54",
".git/objects/4c/24994be95c3961dff147e4c98d4a7ac864bae5": "5e095d96564a018f4088d8e4337b620c",
".git/objects/4c/3df6e5239b793d7fedc476fbd245e6d16516b9": "ab37a266b8f7dbc6bf0cd9cc78ccaf7e",
".git/objects/73/e8d56ed8cfb477fb75ad112bcd54567a492256": "c8842a62246a87bce84f1b7b4b199e28",
".git/objects/c7/790c124da0fc5e6afc0ee3acac8f36474d8fe7": "ee88bc4576722bbfa3182763b45d728b",
".git/objects/c7/98a72b63663573e3c037c09b2f2732cff628c0": "ad2e2bbe89f69d0975192160d1e597db",
".git/objects/24/09d262d1682fd94b23bfea134eed6de92cafc9": "acd364d8f273caf630bd0577aaac1c21",
".git/objects/24/dee2e6a9a5c47993fb7aaddaedc99d4975c98a": "38fd652738dde6a2d43d8d7134020782",
".git/objects/24/bc7dc090bcb0b0364fe84d285948ae1f944a33": "07fc9fd6f6abdd10ba923bf45097160b",
".git/objects/24/bcc01c293e3c661bd45573b751423b495613ed": "707f935e1a4e447fd99b9edb9ca56ad3",
".git/objects/61/3bb2f3e85036a14610611d4eba1481de0fd6e4": "b4a6970f1e6f0cdcfab1aeb9c11cdbf5",
".git/objects/61/91dc4e4da32abbf3bfa4e3ab7f83860499595c": "a6a9dda8d82ee28de9ef082a266a4b10",
".git/objects/9c/5b1ef01cda5fc9d527125d4b06994ee02b1ea7": "daf37ab053940d3afc919d419dddbdc8",
".git/objects/2b/ea119740cada8384b58b9acdd2182df73deaaa": "c6d5f42720563d253aed6cc737ce779b",
".git/objects/2b/1a60a0c51be5c031210c652e687190b81f810f": "89b2ac19e42c81b1dfd99cd5f0c37f63",
".git/objects/ba/11a4984d2d32ab6e432bdd0aaf974d3d5c652c": "6b9b367e2a6fd33323665e0725ef63fb",
".git/objects/96/692c7cc72c512ffd57502a9e2a8a4812ffbee1": "38b6e8a19c104b17093ddfb9a92e8c85",
".git/objects/2c/aa5bf63d79c1d26c0d51db138d7b8c82526a62": "167956ab84191db97a157672b8b93276",
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
