import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/pages/MainPage.vue";
import PhotosPage from "@/components/pages/PhotosPage.vue";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage,
    },
    {
        path: '/photos',
        component: PhotosPage,
    }
];

export default new Router({
    mode: 'history',
    routes
})