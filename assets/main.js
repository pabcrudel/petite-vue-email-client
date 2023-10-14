import { createApp, reactive } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js";

const app = reactive({
  greet: "Hello World!"
});

console.log(app.greet)

createApp({app}).mount("#app")
