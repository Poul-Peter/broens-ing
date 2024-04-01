<template>
  <header>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <BreadCrumb></BreadCrumb>
  </header>
  <router-view />
  <span style="min-height: 100%; display: block;"></span>
  <Footer :ydelser="ydelser" :helpful_links="helpful_links"></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
import BreadCrumb from './components/BreadCrumb.vue'
import navitems from './assets/navitems.json'
import { ref } from 'vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Footer,
    BreadCrumb
  },
  setup() {
    const ydelser = ref(navitems.find((link) => link.path =='/ydelser')?.items);
    const helpful_links = ref(navitems.filter(link => ['/om-os', '/kontakt', '/referencer'].includes(link.path)))
    return { ydelser, helpful_links };
  }
}

</script>

