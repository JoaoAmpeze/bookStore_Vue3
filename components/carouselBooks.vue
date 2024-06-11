<template>
  <v-carousel height="400" :show-arrows="false" :cycle="false" interval="3000" :hide-delimiter-background="true">

    <v-carousel-item>
      <v-row>
        <v-col md="2">
          <v-card variant="tonal" height="350" width=" 200" class="bg-white ml-16">
            <v-row>
              <v-row>
                <img class="mt-9 ml-8" height="280" width="181"
                  src="https://s2-techtudo.glbimg.com/fogj7hTNVpgrmdx4uRKiw1oxMRQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png">
              </v-row>
              <v-row class="mt-6 justify-center ">
                <v-btn width="180">
                  A partir de
                </v-btn>
              </v-row>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="2" class="ml-n6">
          <v-card variant="tonal" height="350" width=" 200" class="bg-white ml-16">
            <v-row>
              <v-row>
                <img class="mt-9 ml-8" height="280" width="181"
                  src="https://s2-techtudo.glbimg.com/fogj7hTNVpgrmdx4uRKiw1oxMRQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png">
              </v-row>
              <v-row class="mt-6 justify-center ">
                <v-btn width="180">
                  A partir de
                </v-btn>
              </v-row>
            </v-row>
          </v-card>
        </v-col>
      </v-row> 
       
    </v-carousel-item>

    <v-carousel-item cover>
      <v-card variant="tonal" height="350" width=" 200" class="bg-white ml-16">
        <v-row>
          <v-row>
            <img class="mt-9 ml-8" height="280" width="181"
              src="https://s2-techtudo.glbimg.com/fogj7hTNVpgrmdx4uRKiw1oxMRQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png">
          </v-row>
          <v-row class="mt-6 justify-center ">
            <v-btn width="180">
              A partir de
            </v-btn>
          </v-row>
        </v-row>
      </v-card>
    </v-carousel-item>

  </v-carousel>

</template>

<script>
export default {
  name: "CarouselBooksComponent",
};
</script>