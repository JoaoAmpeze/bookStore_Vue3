<template>
  <body style="background-color: #005859;">
    <v-row>
      <v-col cols="11">
        <h1  class="ml-4 mt-3" style="color: white">
          {{ titulo }}
        </h1>
      </v-col>
      <v-col>
        <v-tooltip color="green" text="Clique para adicionar um registro">
          <template class="text-white" v-slot:activator="{ props }">
            <v-btn
              class="mt-3"
              fab
              v-bind="props"
              small
              icon="mdi-plus"
              color="green darken-2"
              @click="abrirDialog"
            >
            </v-btn>
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :loading="loading"
          :headers="headers"
          theme="light"
          :items="items"
          class="bg-teal-lighten-1"
        >
          <template v-slot:no-data>
            <span> Nenhum dado Encontrado </span>
            <v-btn color="error">
              <v-icon> mdi-reload </v-icon>
            </v-btn>
          </template>

          <template v-slot:loading>
            <span> Carregando dados </span>
            <v-progress-circular
              color="green"
              indeterminate
            ></v-progress-circular>
          </template>

          <!-- <template v-slot:item.dataInicio="{ item }">
          <span style="color: green">
            {{
              item.dataInicio.substring(0, 10)
            }}
          </span>
        </template> -->
          <!-- <template v-slot:item.price="{ item }">
            <span
              :style="item.price >= 20 ? 'color:red;' : 'color: green;'"
              >{{ item.price }}</span
            >
          </template> -->
          <template v-slot:item.actions="{ item }">
            <v-icon class=" text-green me-2" size="small" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon size="small" color="error" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </body>
</template>

<style>
.v-table tbody tr:nth-child(even) {
  background-color: #B2DFDB;
  color: black;
}

.v-table tbody tr:nth-child(odd) {
  background-color:  #007a7c;
}
</style>

<script>
export default {
  name: "TabelaDadosComponent",
  props: {
    items: {
      type: Array,
    },
    headers: {
      type: Array,
    },
    loading: {
      type: Boolean,
    },
    titulo: {
      type: String,
    },
  },

  methods: {
    deleteItem(item) {
      this.$emit("deleteItem", item);
    },
    editItem(item) {
      this.$emit("editItem", item);
    },
    abrirDialog() {
      this.$emit("abrirDialog");
    },
  },
};
</script>
