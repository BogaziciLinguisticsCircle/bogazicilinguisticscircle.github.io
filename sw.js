importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1cd219a72cc48232bce9.js",
    "revision": "931b5105e2c94980271b855f105b9cdd"
  },
  {
    "url": "/_nuxt/30b081eb0a0cb5f70a49.js",
    "revision": "de57a372038f30ce818bd6bf1238c5c1"
  },
  {
    "url": "/_nuxt/39353947991f2cba758d.js",
    "revision": "6399c43c792b0ef757c95e0e5962e3ca"
  },
  {
    "url": "/_nuxt/4de792a434c19c448bef.js",
    "revision": "c970c4e89c6e191b69879fb83b49f7dd"
  },
  {
    "url": "/_nuxt/88400c19974934cdc87d.js",
    "revision": "282fc8b1c048dec307cedf1ab8bdab5f"
  },
  {
    "url": "/_nuxt/b8891f8676f2617a9bae.js",
    "revision": "682fe81bc69a737446ea4ea40e4ad949"
  },
  {
    "url": "/_nuxt/d49ecd687911358e9bdb.js",
    "revision": "3c31b39e5f8164fec66ba6fea02aacac"
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
