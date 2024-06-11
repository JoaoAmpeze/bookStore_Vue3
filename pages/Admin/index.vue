<template>
  <v-app class="bg-teal-lighten-4">
    <v-container>
      <v-row class="justify-center d-flex align-center mt-15">
        <v-col class="justify-start mt-n12 ml-n15" md="4">
          <taskList></taskList>
        </v-col>
        <v-col>
          <v-row>
            <v-col class=" mt-n1 d-flex justify-space-around">
              <h1 style="color: black">Bem Vindo!</h1>
            </v-col>
          </v-row>
          <v-row class=" justify-space-around">
            <navigationButtons></navigationButtons>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

definePageMeta({
  layout: "admin",
});
</script>