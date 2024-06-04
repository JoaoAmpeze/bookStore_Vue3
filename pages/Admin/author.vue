<template>
  <body
  style="background-color: rgb(237, 235, 235); height:100dvh;"
  >
    <v-container>
      <v-row class="justify-center mt-15">
        <v-col md="2">
          <v-btn 
            height="80"
            width="150"
            style="background-color: white; color: #000;"
            value="categories"  
            to="/admin/categories"
            prepend-icon="mdi-bookmark-multiple-outline" stacked
            size="large">
              Categorias
            </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000;"
            value="author"
            to="/admin/author"
            prepend-icon="mdi-account-plus-outline" stacked
            size="large"
          >
          Autor
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000;"
            value="books"
            to="/admin/books"
            prepend-icon="mdi-book-open-page-variant-outline" stacked
            size="large"
          >
          Livros
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000;"
            value="cupoms"
            to="/admin/cupoms"
            prepend-icon="mdi-brightness-percent" stacked
            size="large"
          >
          Cupoms
          </v-btn>
        </v-col>
      </v-row>  
    </v-container>
    <v-container class="justify-center d-flex align-center mt-n2">
      <TabelaDados
        v-if="items.length > 0"
        @editItem="editItem"
        @abrirDialog="() => (ativo = true)"
        titulo="Autores"
        :loading="loading"
        @deleteItem="deleteItem"
        :headers="headers"
        :items="items"
      ></TabelaDados>
      <h1 v-else>Sem items</h1>
    </v-container>
    <v-dialog v-model="ativo" max-width="500">
      <v-card height="600" width="700">
        <v-card-title>
          <h1>{{ tituloDialog }} um Autor</h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col md="2">
              <v-text-field
                vari
                ant="outlined"
                label="Id"
                disabled
                v-model="author.id"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                variant="outlined"
                label="Nome"
                placeholder="Nome"
                v-model="author.name"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col ml="6">
              <v-text-field
                variant="outlined"
                label="Biografia"
                placeholder="Biografia"
                v-model="author.biography"
              >
              </v-text-field>
            </v-col>
            <v-col ml="6">
              <v-text-field
                variant="outlined"
                label="Imagem"
                v-model="author.image"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class="justify-self-center d-flex align-self-center">
                Preview
              </h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="justify-self-center d-flex align-self-center">
              <img
                :src="author.image"
                class="bg-surface-variant rounded-circle mx-auto"
                style="height: 170px; width: 170px"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" variant="outlined" @click="persist">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </body>
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
      author: {
        id: null,
        name: null,
        biography: null,
        image: null,
      },
      headers: [
        {
          title: "ID",
          key: "id",
        },
        {
          title: "Nome",
          key: "name",
        },
        {
          title: "Biografia",
          key: "biography",
        },
        {
          title: "Actions",
          key: "actions",
          sortable: false,
        },
      ],
      items: [],
    };
  },

  async created() {
    await this.getItems();
  },

  computed: {
    tituloDialog: function () {
      return this.author.id ? "Editar" : "Adicionar";
    },
  },

  watch: {
    ativo(valor) {
      if (valor == false) {
        this.resetauthor();
      }
    },
  },

  methods: {
    resetauthor() {
      this.author = {
        id: null,
        name: null,
        biography: null,
        image: null,
      };
      this.ativo = false;
    },

    async persist() {
      if (this.author.id) {
        const response = await this.$api.post(
          `/author/persist/${this.author.id}`,
          this.author
        );
      } else {
        const response = await this.$api.post("/author/persist", this.author);
      }
      this.resetauthor();
      await this.getItems();
    },

    editItem(item) {
      this.author = {
        ...item,
      };
      this.ativo = true;
    },

    async deleteItem(item) {
      if (confirm(`Deseja deletar o registro com id ${item.id}`)) {
        const response = await this.$api.post("/author/destroy", {
          id: item.id,
        });
        if (response.type == "error") {
          alert(response.message);
        }
      }
      await this.getItems();
    },

    async getItems() {
      const response = await this.$api.get("/author");
      this.items = response.data;
      this.loading = false;
    },
  },
};
</script>
