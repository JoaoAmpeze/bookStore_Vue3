<template>
    <v-sheet
      class="mx-auto bg-teal-lighten-4"
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
          v-for="(author,i) in items"
          :key="i"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
     
            v-bind="props"
            :class="isHovering ? 'border-xl' : undefined"
            class="bg-white text-white ml-3"
            id="rounded-card"
            :image= author.image
          >
          </v-card>
         </v-hover>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </template>

<script>
export default {
    name: "slideauthorComponent",
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
        const response = await this.$api.get('/author')
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
  min-height: 215px;
  min-width: 245px;
  padding: 75px;
}



</style>