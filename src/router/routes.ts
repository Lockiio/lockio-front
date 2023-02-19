import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import AboutPage from "../pages/AboutPage.vue";
import NotFound from "../pages/NotFoundPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import LockiosPage from "../pages/LockiosPage.vue";
import ReservationsPage from "../pages/ReservationsPage.vue";
import ProfilePage from "../pages/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/lockios",
    name: "Lockios",
    component: LockiosPage,
  },
  {
    path: "/reservations",
    name: "Reservations",
    component: ReservationsPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
