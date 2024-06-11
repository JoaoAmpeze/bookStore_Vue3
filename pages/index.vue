<script setup lang="ts">
import SlideCategories from '~/components/slideCategories.vue';
</script>

<template> 
  <v-app class="bg-teal-lighten-4">
    <v-row class="mt-n1">
      <v-col>
        <CarouselBanner></CarouselBanner>
      </v-col>
      </v-row>
      <v-row >
        <slideBooks></slideBooks>
      </v-row>
      <v-row >
        <SlideCategories></SlideCategories>
      </v-row>
      <v-row >
        <SlideAuthor></SlideAuthor>
      </v-row>
    </v-app>
</template>