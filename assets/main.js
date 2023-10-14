import { createApp, reactive } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js";

const app = reactive({
  apiUrl: "https://randomuser.me/api/",
  user: {},
  async fetchUser() {
    const response = await fetch(this.apiUrl);
    const parsedResponse = await response.json();

    this.user = parsedResponse.results[0];
    console.log(this.user)
  },
});

app.fetchUser();

createApp({app}).mount("#app")
