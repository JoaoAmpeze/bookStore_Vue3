<template>
  <v-layout>
    <v-row style="background-color: #007a7c; height: 70px; width: 100px">
      <v-col md="1"></v-col>
      <v-col md="5">
        <h1 class="ml-15 mt-1 justify-center d-flex font-weight-bold">LIVRERO</h1>
      </v-col>

      <v-col md="4" class="mt-2">
        <v-btn size="large" class="ml-1 font-weight-bold" style="background-color: #007a7c" variant="text"
          prepend-icon="mdi-account-outline">
          Olá, Adminitrador
        </v-btn>
        <v-btn size="large" class="ml-1 font-weight-bold" style="background-color: #007a7c" variant="text"
          prepend-icon="mdi-cart-outline">
        </v-btn>
      </v-col>
    </v-row>
    </v-layout>
  <slot/>
</template>