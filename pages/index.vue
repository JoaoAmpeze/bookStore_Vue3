<template>
  <body style="background-color: white">
    <v-row>
      <v-col class="mt-3">
        <v-carousel  height="300" :show-arrows="false" :cycle="true" interval="3000">
          <v-carousel-item
            src="https://d2da0u06q4mna7.cloudfront.net/highlights/namorados-full-banner-desk-.png"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://d2da0u06q4mna7.cloudfront.net/highlights/feirao-de-livros-23-home-desk.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://d2da0u06q4mna7.cloudfront.net/highlights/Independentes+Banner+Home+Desktop+-+1920x350px.png"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row  style="background-color: rgb(141, 141, 141); height: 500px;">
      <v-col md="1">

      </v-col>
      <v-col md="6" class="mt-5">
        <h2> Livros mas vendidos</h2>
      </v-col>
    </v-row>
    <v-row class="mt-6" style="background-color: rgb(141, 141, 141); height: 500px;">
      <v-col>
      </v-col>
    </v-row>
    <v-row class="mt-6" style="background-color: rgb(141, 141, 141); height: 500px;">
      <v-col>
      </v-col>
    </v-row>
  </body>
</template>
