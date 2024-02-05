import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    name: "Home_page",
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: " Home Page",
    },
  },
  {
    name: "signIn",
    path: "/signIn",
    component: () => import("@/views/signIn.vue"),
    meta: {
      title: " Sign In",
    },
  },
  {
    name: "quizOne",
    path: "/quizOne",
    component: () => import("@/components/global/quizOne"),
    meta: {
      title: " quiz One",
    },
  },
  {
    name: "quizTwo",
    path: "/quizTwo",
    component: () => import("@/components/global/quizTwo"),
    meta: {
      title: " quiz Two",
    },
  },
  {
    name: "quizThree",
    path: "/quizThree",
    component: () => import("@/components/global/quizThree"),
    meta: {
      title: " quiz Three",
    },
  },
  {
    name: "quizFour",
    path: "/quizFour",
    component: () => import("@/components/global/quizFour"),
    meta: {
      title: " quiz Four",
    },
  },
  {
    name: "quizFive",
    path: "/quizFive",
    component: () => import("@/components/global/quizFive"),
    meta: {
      title: " quiz Five",
    },
  },
  {
    name: "quizSix",
    path: "/quizSix",
    component: () => import("@/components/global/quizSix"),
    meta: {
      title: " quiz six",
    },
  },
  {
    name: "quizSeven",
    path: "/quizSeven",
    component: () => import("@/components/global/quizSeven"),
    meta: {
      title: " quiz Seven",
    },
  },
  {
    name: "quizEight",
    path: "/quizEight",
    component: () => import("@/components/global/quizEight"),
    meta: {
      title: " quiz Eight",
    },
  },
  {
    name: "quizNine",
    path: "/quizNine",
    component: () => import("@/components/global/quizNine"),
    meta: {
      title: " quiz Nine",
    },
  },
  {
    name: "quizTen",
    path: "/quizTen",
    component: () => import("@/components/global/quizTen"),
    meta: {
      title: " quiz Ten",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
