<template>
  <v-container class="justify-center mt-5">
    <TabelaDados v-if="items.length > 0" @editItem="editItem" @abrirDialog="() => ativo = true" titulo="Categorias" :loading="loading" @deleteItem="deleteItem" :headers="headers" :items="items"></TabelaDados>
    <h1 v-else> Sem items</h1>
  </v-container>
  <v-dialog
      v-model="ativo"
      max-width="500"
    >
    <v-card
      height="460"
      width="600"
    >
      <v-card-title>
        <h1>
          {{ tituloDialog }} um cupoms
        </h1>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Código"
              placeholder="Código"
              v-model="cupoms.code"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Valor"
              placeholder="Valor"
              v-model="cupoms.value"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Usos"
              placeholder="Usos restante"
              v-model="cupoms.uses"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              label="Categoria"
              placeholder="Categoria"
              v-model="cupoms.name"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
              <v-autocomplete
                v-model="cupoms.type"
                :items="tipo"
                label="Tipo"
              ></v-autocomplete>
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
      cupoms: {
        id: null,
        code: null,
        type: null,
        value: null,
        uses: null,
      },
      headers: [
        {
          title: 'Código',
          key: 'code'
        },
        {
          title: 'Tipo',
          key: 'type'
        },
        {
          title: 'Valor',
          key: 'value'
        },
        {
          title: 'Usos',
          key: 'uses'
        },
        {
          title: 'Actions',
          key: 'actions',
          sortable: false
        },
      ],
      items: [],
      tipo:[
        'percent',
        'fixed'
      ],
    }
  },

  async created(){
    await this.getItems();
  },

  computed: {
    tituloDialog: function() {
      return this.cupoms.id ? 'Adicionar': 'Criar';
    }
  },

  watch: {
    ativo(valor) {
      if (valor == false) {
        this.resetcupoms()
      }
    }
  },

  methods: {
    resetcupoms() {
      this.cupoms = {
        id: null,
        code: null,
        type: null,
        value: null,
        uses: null,
      },
      this.ativo = false;
    },

    async persist() {
      if (this.cupoms.id) {
        const response = await this.$api.post(`/cupoms/persist/${this.cupoms.id}`, this.cupoms);
      } else {
        const response = await this.$api.post('/cupoms/persist', this.cupoms);
      }
      this.resetcupoms()
      await this.getItems();
    },

    editItem(item) {
      this.cupoms = {
        ...item
      };
      this.ativo = true;
    },

    async deleteItem(item) {
      if (confirm(`Deseja deletar o registro com id ${item.id}`)) {
        const response = await this.$api.post('/cupoms/destroy', {id:item.id} );
        if (response.type == 'error') {
          alert(response.message);
        }
      }
      await this.getItems();
    },
    async getItems() {
      const response = await this.$api.get('/cupoms');
      this.items = response.data;
      this.loading = false;
    }
  }
}
</script>