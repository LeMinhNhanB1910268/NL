import { createWebHistory, createRouter } from "vue-router";
import ProductSport from "@/views/ProductSport.vue";
import aa from "@/views/2.vue";
import Discount from "@/views/Discount.vue";
import About from "@/views/About.vue";
const routes = [
    {
    path: "/", name: "home", component: ProductSport
    },
    {
    path: "/aa", name: "productsport1", component: aa
    },
    {
        path: "/discount", name: "discount", component: Discount
    },
    {
        path: "/about", name: "about", component: About
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;