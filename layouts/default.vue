<template>
  <v-layout>
    <v-row style="background-color: #005859; height: 80px; width: 3000px">
      <v-col md="2"> </v-col>
      <v-col class="mt-2">
        <span
          >Compre já usando o Cupom LEVA10 paga garantir 10% de desconto na sua primeira compra!</span
        >
      </v-col>
    </v-row>
  </v-layout>
  <v-layout>
    <v-row variant="elevated" style="background-color: #007a7c; height: 70px; width: 100px">
      <v-col md="1"></v-col>
      <v-col md="2">
        <h2 class="ml-15 mt-1 font-weight-bold">LIVRERO</h2>
      </v-col>
      <v-col class="ml-n12 mt-1" md="1">
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn variant="tonal" height="40" color="#007a7c" v-bind="props">
              <v-icon size="x-large" color="white ">mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list height="600" width="600" style="background-color: aliceblue">
            <v-btn>a</v-btn>
          </v-list>
        </v-menu>
      </v-col>
      <v-col class="mt-1 ml-n15">
        <v-card height="40" width="400" style="background-color: white">
          <v-text-field
            style="color: black"
            class="mt-n2"
            label="Pesquisa"
            prepend-inner-icon="mdi-magnify"
            hide-details
            single-line
            width="400"
          />
        </v-card>
      </v-col>
      <v-col md="5" class="mt-">
        <v-btn  size="large" class="font-weight-bold" style="background-color: #007a7c" variant="text" prepend-icon="mdi-heart-outline">
        Minha lista
        </v-btn>
        <v-btn size="large" class="ml-1 font-weight-bold" style="background-color: #007a7c" variant="text" prepend-icon="mdi-account-outline">
          Olá, ...
        </v-btn>
        <v-btn  size="large" class="ml-1 font-weight-bold" style="background-color: #007a7c" variant="text" prepend-icon="mdi-cart-outline">
        </v-btn>
      </v-col>
    </v-row>
  </v-layout>
    <slot/>
</template>
