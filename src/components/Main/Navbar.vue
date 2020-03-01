<template>
  <nav>
    <v-toolbar class="blue darken-1">
      <v-toolbar-title>
        <span class="white--text">Barker</span>
      </v-toolbar-title>
    </v-toolbar>
    <Sidebar />
  </nav>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  components: {
    Sidebar,
  }
};
</script>
