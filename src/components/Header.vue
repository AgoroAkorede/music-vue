<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home', path: '/' }"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <router-link class="px-2 text-white" to="/about">About</router-link>

          <router-link
            class="px-2 text-white"
            :to="{ name: 'manage', path: '/manage-music' }"
            >Manage</router-link
          >
          <li v-if="!userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link
                class="px-2 text-white"
                :to="{ name: 'manage', path: '/manage-music' }"
                >Manage</router-link
              >
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signout"
                >Log Out</a
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  methods: {
    ...mapMutations(["toggleAuthModal"]),
    signout() {
      this.$store.dispatch("signout");
      // if (this.$route.meta.requiresAuth) {
      //   this.$router.push({ name: "home" });
      // }
      this.$store.dispatch("signout", {
        router: this.$router,
        route: this.$route,
      });

      // console.log(this.$route);
      this.$router.push({ name: "home" });
    },
    // toggleAuthModal() {
    //   this.$store.commit("toggleAuthModal");
    // },
  },
};
</script>
