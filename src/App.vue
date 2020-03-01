<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Main/Navbar";
import Sidebar from "./components/Main/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>
