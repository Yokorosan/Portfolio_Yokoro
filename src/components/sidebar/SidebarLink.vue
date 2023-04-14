<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useSidebarStore } from "@/stores/sidebarStore";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const sidebar = useSidebarStore();
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, sidebar };
  },
};
</script>

<template>
  <router-link
    :to="to"
    class="flex items-center gap-4 cursor-pointer font-semibold p-3 my-1 mx-2 w-full rounded hover:bg-purple active:bg-blue"
    :class="{ active: isActive }"
  >
    <font-awesome-icon class="" :icon="icon" />
    <transition name="fade">
      <span v-if="!sidebar.collapsed">
        <slot></slot>
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.active {
  background-color: blue;
}
</style>
