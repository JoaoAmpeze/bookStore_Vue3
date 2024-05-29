<template>
  <v-container class="justify-center mt-5">
    <TabelaDados v-if="items.length > 0" @editItem="editItem" @abrirDialog="() => ativo = true" titulo="Livros" :loading="loading" @deleteItem="deleteItem" :headers="headers" :items="items"></TabelaDados>
    <h1 v-else> Sem items</h1>
  </v-container>
  <v-dialog
      v-model="ativo"
      max-width="500"
    >
    <v-card
      height="600"
      width="700"
    >
      <v-card-title>
        <h1>
          {{ tituloDialog }} um Livro
        </h1>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Nome do Livro"
              placeholder="Harry Potter"
              v-model="books.name"
            >

            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Preço"
              placeholder="Preço do Livro"
              v-model="books.price"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Descrição"
              placeholder="Descrição do Livro"
              v-model="books.description"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Nota"
              placeholder="Nota"
              v-model="books.rating"
            >
            </v-text-field>
          </v-col>
        </v-row>
      <v-row>
        <v-col>
          <v-autocomplete
            :items="author"
            label="Autor"
            item-title="name"
            item-value="id"
            v-model="books.idAuthor"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            :items="categories"
            label="Categoria"
            item-title="name"
            item-value="id"
            v-model="books.idCategory"
          >
          </v-autocomplete>
        </v-col>
      </v-row>  
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Imagem"
              placeholder="Link da imagem"
              v-model="books.image"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green"
          variant="outlined"
          @click="persist"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false,
      valor: 0,
      ativo: false,
      loading: true,
      textoUsuario: null,
      books: {
        id: null,
        name: null,
        price: null,
        image: null,
        description: null,
        rating: null,
        idAuthor: null,
      },
      headers: [
        {
          title: 'Nome',
          key: 'name'
        },
        {
          title: 'Preço',
          key: 'price'
        },
        {
          title: 'Descrição',
          key: 'description'
        },
        {
          title: 'Nota',
          key: 'rating'
        },
        {
          title: 'Actions',
          key: 'actions',
          sortable: false
        },
      ],
      items: [],
      author: [],
      categories: [],
    }
  },

  async created(){
    await this.getItems();
    await this.getAuthor();
    await this.getCategory();
  },

  computed: {
    tituloDialog: function() {
      return this.books.id ? 'Editar': 'Adicionar';
    }
  },

  watch: {
    ativo(valor) {
      if (valor == false) {
        this.resetbooks()
      }
    }
  },

  methods: {
    resetbooks() {
      this.books = {
        id: null,
        nome: null,
        dataInicio: null,
        dataFim: null,
        local: null,
        idEvento: null
      }
      this.ativo = false;
    },

    async persist() {
      if (this.books.id) {
        const response = await this.$api.post(`/books/persist/${this.books.id}`, this.books);
      } else {
        const response = await this.$api.post('/books/persist', this.books);
      }
      this.resetbooks()
      await this.getItems();
    },

    editItem(item) {
      this.books = {
        ...item
      };
      this.ativo = true;
    },

    async deleteItem(item) {
      if (confirm(`Deseja deletar o registro com id ${item.id}`)) {
        const response = await this.$api.post('/books/destroy', {id:item.id} );
        if (response.type == 'error') {
          alert(response.message);
        }
      }
      await this.getItems();
    },

    async getAuthor() {
      const response = await this.$api.get('/author');
      this.author = response.data;
    },
    async getCategory() {
      const response = await this.$api.get('/categories');
      this.categories = response.data;
      console.log(response);
    },
    async getItems() {
      const response = await this.$api.get('/books');
      this.items = response.data;
      this.loading = false;
    }
  }
}
</script>