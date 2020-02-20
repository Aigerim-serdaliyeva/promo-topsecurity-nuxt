import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

// Vue.use(VueScrollTo)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 700,
  easing: "ease",
  offset: -96,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
