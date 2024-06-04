<template>
  <body style="background-color: rgb(237, 235, 235); height: 100dvh">
    <v-container>
      <v-row class="justify-center mt-15">
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000"
            value="categories"
            to="/admin/categories"
            prepend-icon="mdi-bookmark-multiple-outline"
            stacked
            size="large"
          >
            Categorias
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000"
            value="author"
            to="/admin/author"
            prepend-icon="mdi-account-plus-outline"
            stacked
            size="large"
          >
            Autor
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000"
            value="books"
            to="/admin/books"
            prepend-icon="mdi-book-open-page-variant-outline"
            stacked
            size="large"
          >
            Livros
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            height="80"
            width="150"
            style="background-color: white; color: #000"
            value="cupoms"
            to="/admin/cupoms"
            prepend-icon="mdi-brightness-percent"
            stacked
            size="large"
          >
            Cupoms
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="justify-center mt-n0">
      <TabelaDados
        v-if="items.length > 0"
        @editItem="editItem"
        @abrirDialog="() => (ativo = true)"
        titulo="Categorias"
        :loading="loading"
        @deleteItem="deleteItem"
        :headers="headers"
        :items="items"
      ></TabelaDados>
      <h1 v-else>Sem items</h1>
    </v-container>
    <v-dialog v-model="ativo" max-width="500">
      <v-card height="300" width="500">
        <v-card-title>
          <h1>{{ tituloDialog }} uma Categoria</h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <!-- <v-col>
              <v-text-field
                variant="outlined"
                label="ID"
                disabled
                v-model="categories.id"
              >
              </v-text-field>
            </v-col> -->
            <v-col>
              <v-text-field
                variant="outlined"
                label="Categoria"
                placeholder="Categoria"
                v-model="categories.name"
              >
              </v-text-field>
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
      categories: {
        id: null,
        name: null,
      },
      headers: [
        {
          title: "Id",
          key: "id",
        },
        {
          title: "Nome",
          key: "name",
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
      return this.categories.id ? "Editar" : "Criar";
    },
  },

  watch: {
    ativo(valor) {
      if (valor == false) {
        this.resetcategories();
      }
    },
  },

  methods: {
    resetcategories() {
      this.categories = {
        id: null,
        nome: null,
      };
      this.ativo = false;
    },

    async persist() {
      if (this.categories.id) {
        const response = await this.$api.post(
          `/categories/persist/${this.categories.id}`,
          this.categories
        );
      } else {
        const response = await this.$api.post(
          "/categories/persist",
          this.categories
        );
      }
      this.resetcategories();
      await this.getItems();
    },

    editItem(item) {
      this.categories = {
        ...item,
      };
      this.ativo = true;
    },

    async deleteItem(item) {
      if (confirm(`Deseja deletar o registro com id ${item.id}`)) {
        const response = await this.$api.post("/categories/destroy", {
          id: item.id,
        });
        if (response.type == "error") {
          alert(response.message);
        }
      }
      await this.getItems();
    },
    async getItems() {
      const response = await this.$api.get("/categories");
      this.items = response.data;
      this.loading = false;
    },
  },
};
</script>
