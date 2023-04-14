<script lang="ts">
import { defineComponent } from "vue";
import Contact from "../views/Contact.vue";
import Profile from "../views/Profile.vue";
import Projects from "../views/Projects.vue";
import Stack from "../views/Stack.vue";
import NotFound from "../views/NotFound.vue";

const routes = {
  "/": Profile,
  "/contact": Contact,
  "/projects": Projects,
  "/stack": Stack,
};

export default defineComponent({
  data() {
    return { routes };
  },
  name: "Header",
});
</script>

<template>
  <header class="mx-auto bg-blue p-2 w-screen">
    <a href="#/">
      <font-awesome-icon icon="fa-solid fa-user" color="black" /> Home
    </a>
    <a href="#/contact">
      <font-awesome-icon icon="fa-solid fa-address-card" color="black" />
      Contact
    </a>
    <a href="#/projects">
      <font-awesome-icon icon="fa-brands fa-linkedin" color="black" />
      Projects
    </a>
    <a href="#/stack">
      <font-awesome-icon icon="fa-brands fa-whatsapp" color="black" />
      WhatsApp
    </a>
  </header>
</template>
}
