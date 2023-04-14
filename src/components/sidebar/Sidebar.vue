<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebarStore";
import { defineComponent } from "vue";
import SidebarLink from "./SidebarLink.vue";
defineComponent({
  props: {},
  components: { SidebarLink },
  setup() {},
});

const sidebarStore = useSidebarStore();
</script>

<template>
  <div
    class="bg-green floa-left fixed z-1 px-2 flex flex-col justify-center items-center transition-all ease-in-out duration-200 h-screen"
    :style="{ width: sidebarStore.sidebarWidth() }"
  >
    <SidebarLink to="/" icon="fa-solid fa-user">Profile</SidebarLink>
    <SidebarLink to="/projects" icon="fa-brands fa-linkedin"
      >Projects</SidebarLink
    >
    <SidebarLink to="/stack" icon="fa-brands fa-whatsapp">Stack</SidebarLink>
    <SidebarLink to="/contact" icon="fa-solid fa-address-card"
      >Contact</SidebarLink
    >
    <span @click="sidebarStore.toggleSidebar()" class="">
      <font-awesome-icon
        :icon="['fas', 'angles-left']"
        class="transition-all ease-linear duration-200 absolute bottom-0 right-0 p-3"
        :class="{
          'rotate-180': sidebarStore.collapsed,
        }"
      />
    </span>
  </div>
</template>

<style>
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
