<template>
    <v-container class="justify-center d-flex align-center" style="background-color: #005859; height: 88px; width: 782px;">
            <v-btn variant="text" height="80" width="150" style="background-color: #005859; color: white;" value="Home" to="/admin/"
                prepend-icon="mdi-home-outline" stacked size="large">
                Home
            </v-btn>
            <v-btn variant="text" height="80" width="150" style="background-color: #005859; color: white;" value="categories"
                to="/admin/categories" prepend-icon="mdi-bookmark-multiple-outline" stacked size="large">
                Categorias
            </v-btn>
            <v-btn variant="text" height="80" width="150" style="background-color: #005859; color: white;" value="author"
                to="/admin/author" prepend-icon="mdi-account-plus-outline" stacked size="large">
                Autor
            </v-btn>
            <v-btn variant="text" height="80" width="150" style="background-color: #005859; color: white;" value="books"
                to="/admin/books" prepend-icon="mdi-book-open-page-variant-outline" stacked size="large">
                Livros
            </v-btn>
            <v-btn variant="text" height="80" width="150" style="background-color: #005859; color: white;" value="cupoms"
                to="/admin/cupoms" prepend-icon="mdi-brightness-percent" stacked size="large">
                Cupoms
            </v-btn>
    </v-container>
</template>

<script>
export default {
    name: "navigationButtonsComponent",
};
</script>