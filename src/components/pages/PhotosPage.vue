<template>

  <v-container>
    <PhotoForm
        @addPhoto="addPhoto($event)"
    />
    <v-row>
      <AppPhoto
          v-for="photo in $store.getters.getAllPhotos"
          :key="photo.id"
          :photo="photo"

      />
      <PhotoDialog />
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
  async mounted() {
    await this.fetchPhotos()
  },
  methods: {
    ...mapActions(['fetchPhotos']),
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