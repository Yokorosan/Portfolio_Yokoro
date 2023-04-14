<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { useSidebarStore } from "./stores/sidebarStore";
import Body from "@/components/Body.vue";

export default defineComponent({
  components: { Sidebar },
  setup() {
    const sidebar = useSidebarStore();
    return sidebar;
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
});
</script>

<template>
  <Sidebar></Sidebar>
  <div :style="{ 'margin-left': sidebarWidth() }">
    <router-view />
  </div>
</template>

<style scoped></style>
