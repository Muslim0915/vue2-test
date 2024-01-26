<template>

  <v-container>
    <PhotoForm
        @addPhoto="addPhoto"
    />
    <v-row>
      <AppPhoto
          v-for="photo in $store.getters.getAllPhotos"
          :key="photo.id"
          :photo="photo"

      />
<!--      @openPhoto = "openPhoto" this was emited from AppPhoto component-->
      <PhotoDialog />
<!--      :photo="currentPhoto"-->
    </v-row>


  </v-container>
</template>

<script>
import AppPhoto from "@/components/photo/AppPhoto.vue";
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
import {mapActions} from "vuex";

export default {
  components: {PhotoDialog, PhotoForm, AppPhoto},
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false,
  }),
  mounted() {
    // this.fetchTodos();
    // this.$store.dispatch('fetchPhotos')
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    // fetchTodos() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
    //       .then(response => this.photos = response.data);
    // },
    addPhoto(photo) {
      this.$store.getters.getAllPhotos.push(photo);
      console.log(this.photos);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    },

  }
}
</script>

<style lang="scss" scoped>

</style>