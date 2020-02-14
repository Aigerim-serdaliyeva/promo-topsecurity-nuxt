import { extend } from '../util/extend-vue-app';
import {WOW} from 'wowjs'

export default function ({ app }) {
    extend(app, {
        data() {
          return {
            wowInit: null
          }
        },
        mounted() {
          this.wowInit = new WOW().init();
        },
        destroyed() {
          this.wowInit = null
        }
    })
}
