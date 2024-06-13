<script setup lang="ts">
import SlideCategories from '~/components/slideCategories.vue';
</script>

<template>
  <v-app class="bg-white">
    <v-row class="mt-n1">
      <v-col>
        <CarouselBanner></CarouselBanner>
      </v-col>
    </v-row>
    <v-row class="mt-9">
      <v-col md="1">
      </v-col>
      <v-col class="ml-2">
        <h2>Livros mais vendidos</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slideBooks></slideBooks>
      </v-col>
    </v-row>
    <v-row class="mt-9">
      <v-col md="1">
      </v-col>
      <v-col class="ml-2">
        <h2 class="font-weight-bold">Principais autores</h2>
      </v-col>
      <SlideAuthor></SlideAuthor>
    </v-row>
    <v-row class="mt-9">
      <v-col md="1">
      </v-col>
      <v-col class="ml-2">
        <h2>Livros de Romance</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slideBooks></slideBooks>
      </v-col>
    </v-row>
    <v-row class="mt-9">
      <v-col md="1">
      </v-col>
      <v-col class="ml-2">
        <h2>Principais Categorias</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SlideCategories></SlideCategories>
      </v-col>
    </v-row>
  </v-app>
</template>