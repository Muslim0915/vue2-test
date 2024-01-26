<template>
  <div>
<AppNavbar />
    <router-view/>

  </div>
</template>

<script>


import AppNavbar from "@/components/AppNavbar.vue";

export default {
  name: 'App',
  components: {AppNavbar},
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>