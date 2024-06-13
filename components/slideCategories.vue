<template>
    <v-sheet
      class="mx-auto bg-white"
      max-width="1400"
      max-heigth="1400"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
      >
        <v-slide-group-item
          v-for="(categories,i) in items"
          :key="i"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :class="isHovering ? 'border-xl border-solid' : undefined"
            class="bg-teal-darken-4 = ml-2"
            color="white"
            id="rounded-card"
            image="https://wp-content.amenteemaravilhosa.com.br/2020/08/series-de-ficcao-cientifica-com-toque-psicologico.png"
          >
          </v-card>
         </v-hover>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </template>

<script>
export default {
    name: "slidecategoriesComponent",
     data () {
    return {
      items: [],
      author: [],
    }
  },

  async created(){
      await this.getItens();
      await this.getAuthor();
    },


    methods: {
      
      async getItens(){
        const response = await this.$api.get('/categories')
        this.items = response.data

      },
      async getAuthor() {
      const response = await this.$api.get("/author");
      this.author = response.data;
    },
    
    },
  };
</script>

<style>

#rounded-card {
  border-radius: 50%; 
  min-height: 230px;
  min-width: 245px;
  padding: 75px;
}

.border {
  border-color: rgb(6, 69, 47);
}
</style>