import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Profile from "../views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/stack",
    name: "Stack",
    component: () => import("../views/Stack.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
