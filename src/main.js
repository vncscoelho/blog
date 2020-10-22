import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/reset.css'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: "stylesheet",
    type: "text/css",
    href: "https://fontlibrary.org/face/iosevka-extended"
  })

  head.link.push({
    rel: "stylesheet",
    type: "text/css",
    href: "https://fontlibrary.org/face/avara"
  })
}
