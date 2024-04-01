import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "forside",
    meta: { title: 'Rådgivende ingeniør med speciale i statiske beregninger', breadcrumb: 'Forside' },
    component: () => import("../views/Forside.vue"),
  },
  
  {
    path: "/kontakt",
    name: "kontakt",
    meta: { title: 'Kontakt | BRØNS', breadcrumb: 'Kontakt' },
    component: () => import("../views/Kontakt.vue"),
  },
  
  {
    path: "/om-os",
    name: "om-os",
    meta: { title: 'Om os | BRØNS', breadcrumb: 'Om os' },
    component: () => import("../views/OmOs.vue"),
  },
  {
    path: "/referencer",
    name: "referencer",
    meta: { title: 'Referencer | BRØNS', breadcrumb: 'Referencer' },
    component: () => import("../views/Referencer.vue"),
  },
  {
    path: "/ydelser",
    name: "ydelser",
    meta: { title: 'Ydelser | BRØNS', breadcrumb: 'Ydelser' },
    component: () => import("../views/Ydelser.vue"),
    children: [
      {
        path: "",
        name: "ydelser-oversigt",
        meta: { title: 'Ydelser oversigt | BRØNS', breadcrumb: 'Oversigt' },
        component: () => import("../views/YdelserRoot.vue"),
      },
      {
        path: "statiske-beregninger",
        name: "statiske-beregninger",
        meta: { title: 'Statiske beregninger til bærende konstruktioner', breadcrumb: 'Statiske beregninger' },
        component: () => import("../views/StatiskeBeregninger.vue"),
      },
      {
        path: "statisk-dokumentation",
        name: "statisk-dokumentation",
        meta: { title: 'Statisk dokumentation | BRØNS', breadcrumb: 'Statisk dokumentation' },
        component: () => import("../views/StatiskDokumentation.vue"),
      },
      {
        path: "staalrammer",
        name: "stålrammer",
        meta: { title: 'Stålrammer | BRØNS', breadcrumb: 'Stålrammer' },
        component: () => import("../views/Stålrammer.vue"),
      },
      {
        path: "murvaerkprojektering",
        name: "murvaerkprojektering",
        meta: { title: 'Murværkprojektering - Kontakt Brøns Ingeniørfirma ApS', breadcrumb: 'Murværkprojektering' },
        component: () => import("../views/MurvaerkProjektering.vue"),
      },
      {
        path: "fem-design",
        name: "fem-design",
        meta: { title: 'FEM-design | Finite Element program til bygningskonstruktioner', breadcrumb: 'FEM-design' },
        component: () => import("../views/FemDesign.vue"),
      },
      {
        path: "diverse",
        name: "diverse",
        meta: { title: 'Diverse | BRØNS', breadcrumb: 'Diverse' },
        component: () => import("../views/Diverse.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

router.beforeEach((to, from, next) => {
  if(typeof to.meta.title === 'string') document.title = to.meta.title;
  next();
});

export default router;
