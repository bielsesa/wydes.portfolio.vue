<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo rounded-circle" src="@/assets/img/logo.jpg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <!-- <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/gallery">Gallery</RouterLink>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <!-- <RouterLink to="/summary">Summary Project</RouterLink> -->
        <!-- <RouterLink to="/gallery">Gallery</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
