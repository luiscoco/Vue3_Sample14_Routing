import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Import your component views
import Home from "./components/HomeComponent.vue";
import About from "./components/AboutComponent.vue";

// Define your routes
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
