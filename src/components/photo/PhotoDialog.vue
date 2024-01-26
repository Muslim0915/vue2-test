<template>
  <v-app>
    <v-dialog
        v-model="$store.getters.getDialogVisible"
        max-width="600"
        @click:outside="$store.commit('hideDialog')"
    >
      <v-card>
        <v-card-title>
          {{ fullTitle }}
        </v-card-title>
        <v-card-text>
          <v-img
              :src="$store.getters.getCurrentPhoto.url"
          />
        </v-card-text>

      </v-card>

    </v-dialog>
  </v-app>

</template>

<script>
export default {
  // props: {
  //   photo: {
  //     type: Object,
  //     required: true,
  //   },
  // value: {
  //   type: Boolean,
  //   default: false,
  // },
  //
  // },
  // created() {
  //   this.dialogVisible = this.value
  //
  // },
  data: () => ({
    // dialogVisible: false,
  }),
  // watch:{
  //   value(newValue){
  //     this.dialogVisible = newValue;
  //   },
  //   dialogVisible(newValue){
  //     this.$emit('input', newValue)
  //   },
  // },
  computed: {
    fullTitle() {
      return `Название файла - ${this.$store.getters.getCurrentPhoto.title}`;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>