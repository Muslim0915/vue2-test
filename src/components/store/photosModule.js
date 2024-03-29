import axios from "axios";

export default {
    state: {
        photos: [], dialogVisible: false, currentPhoto: {},
    }, mutations: {
        setPhotos(state, payload) {
            state.photos = payload;
        }, showDialog(state) {
            state.dialogVisible = true;
        }, hideDialog(state) {
            state.dialogVisible = false;
        }, setCurrentPhoto(state, payload) {
            state.currentPhoto = payload

        }
    }, getters: {
        getAllPhotos: (state) => state.photos,

        getDialogVisible: (state) => state.dialogVisible,

        getCurrentPhoto: (state) => state.currentPhoto,
    }, actions: {
        setPhotos({commit, state}, newObjectPhoto) {
            commit('setPhotos', [...state.photos, newObjectPhoto]);
        },
        fetchPhotos(context) {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(response => context.commit('setPhotos', response.data));
        },
    },
}