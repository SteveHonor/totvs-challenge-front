<template>
  <div>
    <App v-if="this.$store.getters.signedIn">
      <template v-slot:app>
        <slot />
      </template>
    </App>
    <Login v-else>
      <template v-slot:login >
        <slot />
      </template>
    </Login>
  </div>
</template>

<script>
import App from "@/components/layouts/App";
import Login from "@/components/layouts/Login";

export default {
  components: {
    App,
    Login
  }
};
</script>
