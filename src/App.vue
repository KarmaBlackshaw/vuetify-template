<template>
  <v-app id="inspire">
    <Navbar />

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

const Navbar = () => import('@/components/Navbar')
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
html {
  overflow-y: auto!important;
}
</style>
