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
            class="bg-teal-darken-4 ml-2"
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
    }
  },

  async created(){
      await this.getItens();
    },


    methods: {
      
      async getItens(){
        const response = await this.$api.get('/author')
        this.items = response.data
      },
    
    },
  };
</script>
