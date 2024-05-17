import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import home from "./components/home.vue";
import errorPage from "./components/errorPage.vue";
import AllProducts from './components/allProducts.vue';
import addProduct from './components/addProduct.vue';




const routes = [
    {
      path: "/",
      component: home,
      alias: "/home",
    },
    {
      path: "/products",
      component: AllProducts,
    },
    {
      path: "/addProduct",
      component: addProduct,
    },
    {
      path: "/:NotFound(.*)*",
      component: errorPage,
      meta: { hideNavbar: true },
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).mount('#app')
