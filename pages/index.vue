<template>
  <body style="background-color: white; height: 100dvh">
    <v-row>
      <v-col class="d-flex justify-space-around">
        <h1 style="color: black">Bem Vindo!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-space-around">
      <v-bottom-navigation
        style="background-color: white"
      >
        <v-btn value="recent">
          <v-icon style="color: black">mdi-history</v-icon>

          <span style="color: black"> Recent</span>
        </v-btn>

        <v-btn value="favorites">
          <v-icon style="color: black">mdi-heart</v-icon>

          <span style="color: black">Favorites</span>
        </v-btn>

        <v-btn value="nearby">
          <v-icon style="color: black">mdi-map-marker</v-icon>

          <span style="color: black">Nearby</span>
        </v-btn>
        <v-btn value="nearby">
          <v-icon style="color: black">mdi-map-marker</v-icon>

          <span style="color: black">Nearby</span>
        </v-btn>
      </v-bottom-navigation>
    </v-col>
    </v-row>
  </body>
</template>
