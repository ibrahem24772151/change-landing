import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "../views/landpage/landpageView.vue";
import DashboardView from "../views/Dashboard/DashboardView.vue";
import loginViwe from "@/views/login/loginViwe.vue";
// صفحات الداش بورد
// import heroDashbored from "@/components/dashboard/heroDashbored.vue";
// import servicesDashbored from "@/components/dashboard/servicesDashbored.vue";
// import portfolioDashbored from "@/components/dashboard/portfolioDashbored.vue";
// import contactUsDashbored from "@/components/dashboard/contactUsDashbored.vue";
// import footerDashbored from "@/components/dashboard/footerDashbored.vue";
import heroDashbored from "@/components/DashboardComponent/heroDashbored.vue";
import servicesDashbored from "@/components/DashboardComponent/servicesDashbored.vue";
import portfolioDashbored from "@/components/DashboardComponent/portfolioDashbored.vue";
import contactUsDashbored from "@/components/DashboardComponent/contactUsDashbored.vue";
import footerDashbored from "@/components/DashboardComponent/footerDashbored.vue";

const routes = [
  {
    path: "/",
    name: "LandingPageView",
    component: LandingPageView,
  },
  {
    path: "/DashboardView",
    name: "DashboardView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DashboardView,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        redirect: "/DashboardView/hero", // ✅ الصفحة الافتراضية
      },
      {
        path: "hero",
        name: "heroDashbored",
        component: heroDashbored,
        meta: { title: "Hero Section" },
      },
      {
        path: "services",
        name: "servicesDashbored",
        component: servicesDashbored,
        meta: { title: "Services" },
      },
      {
        path: "portfolio",
        name: "portfolioDashbored",
        component: portfolioDashbored,
        meta: { title: "Portfolio" },
      },
      {
        path: "contact",
        name: "contactUsDashbored",
        component: contactUsDashbored,
        meta: { title: "Contact" },
      },
      {
        path: "footer",
        name: "footerDashbored",
        component: footerDashbored,
        meta: { title: "Footer" },
      },
    ],
  },
  {
    path: "/loginViwe",
    name: "loginViwe",
    component: loginViwe,
  },
];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
    };
  },
});
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token");
  const expiresAt = sessionStorage.getItem("expiresAt");

  const isLoggedIn = token && expiresAt && Date.now() < Number(expiresAt);

  if (to.meta.requiresAuth && !isLoggedIn) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("expiresAt");

    next("/loginViwe");
  } else {
    next();
  }
});
export default router;
