<template>
  <body style="background-color: white; height: 100dvh">
    <v-container>
      <v-row class="justify-center d-flex align-center mt-15">
        <v-col class="d-flex justify-space-around">
          <h1 style="color: black">Bem Vindo!</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-space-around">
          <h1 style="color: black">Selecione o que deseja editar!</h1>
        </v-col>
      </v-row>
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
  </body>
</template>
