importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/223c0a5a35b256c68f8d.js",
    "revision": "af9c334db86b026144d3fef483d171e5"
  },
  {
    "url": "/_nuxt/32bbfe1142848cb32a0e.js",
    "revision": "652d457818dcf8b4e216c29bf2c0b0f4"
  },
  {
    "url": "/_nuxt/4755ab475ab59efbcb3c.js",
    "revision": "725a2f5b76585b62c0c0f96ca8dca537"
  },
  {
    "url": "/_nuxt/5e235224287ceab4e4f8.js",
    "revision": "6dc735e05c259c4abaa3f177a754584a"
  },
  {
    "url": "/_nuxt/70dd31ab3fd0a86f31f6.js",
    "revision": "6bb244083d35a359eba557baf77b989c"
  },
  {
    "url": "/_nuxt/cc0fd991a927a3fbe044.js",
    "revision": "edbeff43ebeabd285363219d6b1a507b"
  }
], {
  "cacheId": "my-nuxt-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
