import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(Vue3Toastify, { 
      autoClose: 2000,
      theme: "colored",
      "position": "bottom-right",
      "dangerouslyHTMLString": true
   });
   return {
      provide: { toast },
   };
});