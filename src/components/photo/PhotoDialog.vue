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
  computed: {
    fullTitle() {
      return `Название файла - ${this.$store.getters.getCurrentPhoto.title}`;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>