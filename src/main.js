import Vue from 'vue'
import { Vuesax  } from 'vuesax'
import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";


import "@/assets/code-highlight.css"
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';


Vue.use(Vuesax)

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
