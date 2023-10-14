import { createApp, reactive } from "https://unpkg.com/petite-vue@0.2.2/dist/petite-vue.es.js";

const user = reactive({
  email: "",
  thumbnail: "",
  photo: "",
  title: "",
  firstName: "",
  lastName: "",
  username: "",
  async fetchUser() {
    const response = await fetch("https://randomuser.me/api/");
    const parsedResponse = await response.json();

    const { name, email, picture, login } = parsedResponse.results[0];

    this.email = email;
    this.thumbnail = picture.thumbnail;
    this.photo = picture.medium;
    this.title = name.title;
    this.firstName = name.first;
    this.lastName = name.last;
    this.username = login.username;
  },
});

user.fetchUser();

createApp({user}).mount("#app");
