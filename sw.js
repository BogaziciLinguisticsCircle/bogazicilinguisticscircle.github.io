importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11848600b7d4aec12a5a.js",
    "revision": "b40319d444e9ccb320f7001630a3238c"
  },
  {
    "url": "/_nuxt/3767cac2e14b7ab5043a.js",
    "revision": "510565c88eaf9d895e1a33e855c71e7a"
  },
  {
    "url": "/_nuxt/5d63133676d57e6e7135.js",
    "revision": "4887f261e604b469afe2742d62444bfd"
  },
  {
    "url": "/_nuxt/5eb54f3bf8b50f6c4437.js",
    "revision": "4c270981ba8c09249e449c09b052af64"
  },
  {
    "url": "/_nuxt/6792ef15f7ebdbd8f7a9.js",
    "revision": "44f7310a8f5e13cbb211ef670e38d96a"
  },
  {
    "url": "/_nuxt/81e07c33b609afcc6604.js",
    "revision": "fa1354d5ace314628102362426f463e0"
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
