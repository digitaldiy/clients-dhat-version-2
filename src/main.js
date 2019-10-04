import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from 'vue'
import VueMaterial from 'vue-material'




import "@/assets/code-highlight.css"
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
