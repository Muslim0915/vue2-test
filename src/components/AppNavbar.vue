<template>
  <v-container fluid>
    <v-app-bar
        color="deep-purple accent-4"
        dence
        dark
    >
      <v-spacer></v-spacer>
      <v-btn outlined class="btn ml-3">
        <router-link class="link"  to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="btn ml-3">
        <router-link class="link" to="/photos">Фотографии</router-link>
      </v-btn>

    </v-app-bar>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.btn{
  margin-right: 20px;
  &:last-child{
    margin-right: 0;
  }
}
.link{
  color: #fff;
  text-decoration: none;
}

</style>