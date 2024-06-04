<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        theme="dark"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" to="/admin/" title="Home" value="a"></v-list-item>
          <v-list-item prepend-icon="mdi-bookmark-multiple-outline" to="/admin/categories" title="categories" value="b"></v-list-item>
          <v-list-item prepend-icon="mdi-account-plus-outline" to="/admin/author" title="author" value="c"></v-list-item>
          <v-list-item prepend-icon="mdi-book-open-page-variant-outline" to="/admin/books" title="livros" value="d"></v-list-item>
          <v-list-item prepend-icon="mdi-brightness-percent" to="/admin/cupoms" title="Cupoms" value="e"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh; background-color: #000000;" theme="dark">

        <slot/>

      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'default'
}
</script>
