<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          class="text-center"
        >
          <v-col
            cols="12"
            sm="12"
            md="12"
          >
            <img
              src="@/assets/loading.svg"
              alt=""
              class=""
            >
          </v-col>
          <v-col
            cols="12"
            sm="12"
            md="12"
          >
            <span class="grey--text overline">Loading application</span>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
html { overflow-y: auto }
</style>
