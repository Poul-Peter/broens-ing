<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-none d-lg-block" role="navigation" aria-label="main-navigation">
      <div class="container px-5">
        <router-link class="navbar-brand img-responsive text-start" to="/">
          <span><img src="/logoblack.png" class="img-fluid" alt="Company Logo"></span>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto text-center flex-1 d-flex justify-content-end">
            <template v-for="link in navLinks" :key="link.title+'-main'">
              <li v-if="link.type == 'default'" class="nav-item h5 mb-0 mx-4">
                  <router-link class="nav-link" :to="link.path">{{ link.title }}</router-link>
              </li>
              <li v-else-if="link.type == 'dropdown'" class="nav-item dropdown h5 mb-0 mx-4">
                <router-link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" :to="link.path" @click="router.push({ path: link.path })">{{ link.title }}</router-link>
                <ul class="dropdown-menu border border-primary border-1" aria-labelledby="navbarDropdownMenuLink">
                  <li v-for="ddlink in link.items" :key="ddlink.title+'-'+link.title+'-main'">
                    <router-link class="dropdown-item h5" :to="link.path+ddlink.path">{{ ddlink.title }}</router-link>
                  </li>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  import navitems from '../assets/navitems.json'
  import { useRouter } from "vue-router";

  export default {
    name: 'Navbar',
    setup() {
      const router = useRouter();
      const navLinks = ref(navitems.filter(item => item.path != '/').sort((a, b) => (b.type === 'dropdown') - (a.type === 'dropdown')));

      return { navLinks, router };
    }
  }
  </script>
  
  <style>

 


  .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; /* remove the gap so it doesn't close */
  }
  .dropdown-menu {
    border-radius: 2px;
  }
  </style>
  