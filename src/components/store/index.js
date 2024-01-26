import Vue from "vue";
import Vuex from 'vuex';
import photosModule from "@/components/store/photosModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        photosModule,
    }
})