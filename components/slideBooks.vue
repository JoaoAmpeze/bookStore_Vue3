<template>
  <v-sheet class="mx-auto bg-white" max-width="1400">
    <v-slide-group v-model="model" class="pa-4" selected-class="bg-success">
      <v-slide-group-item v-for="(books, i) in items" :key="i" v-slot="{ isSelected, toggle, selectedClass }">
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props" class="ml-2" color="white" height="370" width="200" hover>
            <v-row>
              <v-col class="justify-center d-flex mt-2">
                <img height="250" width="180" :src=books.image>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="justify-center d-flex text-h9 font-weight-light text-teal-lighten-3 mb-2 font-weight-black">
                <span class="d-inline-block text-truncate" style="max-width: 170px;">
                  {{ books.name }}
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="justify-center d-flex ">
                <v-btn :class="isHovering ? 'text-white bg-teal-lighten-1' : undefined" class="bg-white mt-n1" outlined hover
                  width="180" height="30">A partir de R${{ books.price }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "slideBooksComponent",
  data() {
    return {
      items: [],
      author: [],
    }
  },

  async created() {
    await this.getItens();
    await this.getAuthor();
  },


  methods: {

    async getItens() {
      const response = await this.$api.get('/books')
      this.items = response.data

    },
    async getAuthor() {
      const response = await this.$api.get("/author");
      this.author = response.data;
    },

  },
};
</script>
