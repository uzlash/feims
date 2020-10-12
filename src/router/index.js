import Vue from "vue";
import VueRouter from "vue-router";
import Facility from "../views/Facility.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Facility",
    component: Facility,
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/site",
    name: "Site",
    component: () => import(/* webpackChunkName: "Site" */ "../views/Site.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/building",
    name: "Building",
    component: () =>
      import(/* webpackChunkName: "Building" */ "../views/Building.vue"),
    meta: {
      showHeader: true,
    },
  },

  {
    path: "/equipment",
    name: "Equipment",
    component: () =>
      import(/* webpackChunkName: "Equipment" */ "../views/Equipment.vue"),
    meta: {
      showHeader: true,
    },
  },
  

  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "Report" */ "../views/Report.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "Setting" */ "../views/Setting.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      showHeader: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
