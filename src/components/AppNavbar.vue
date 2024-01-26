<template>
  <v-container fluid>
    <v-app-bar
        color="deep-purple accent-4"
        dence
        dark
    >
      <v-spacer></v-spacer>
      <v-btn outlined class="ml-3">
        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photos">Фотографии</router-link>
      </v-btn>

    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>