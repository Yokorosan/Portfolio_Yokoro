import { defineStore } from "pinia";

import { ref } from "vue";

export const useSidebarStore = defineStore("sidebarStore", {
  state: () => {
    return {
      collapsed: ref(false),
      SIDEBAR_WIDTH: 180 as Number,
      SIDEBAR_WIDTH_COLLAPSED: 60 as Number,
    };
  },
  getters: {},
  actions: {
    sidebarWidth() {
      return `${
        this.collapsed ? this.SIDEBAR_WIDTH_COLLAPSED : this.SIDEBAR_WIDTH
      }px`;
    },
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
  },
});
