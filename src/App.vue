<template>
  <div>
    <router-link to="/">HomeComponent</router-link>
  </div>
  <div>
    <router-link to="/about">AboutComponent</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

// Example method to navigate programmatically
const navigateToAbout = () => {
  router.push("/about");
};
</script>
