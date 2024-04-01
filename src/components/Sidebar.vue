<template>
  <div class="container-fluid p-0 d-flex h-100 d-lg-none">
    <div class="sidebar-backdrop" @click="closeSidebar" v-if="isSidebarOpen"></div>
    <div id="bdSidebar" class="d-flex flex-column p-3 bg-light text-black offcanvas offcanvas-start" :class="{'sidebar-active show': isSidebarOpen}">
      <div class="d-flex justify-content-center w-100">
        <router-link class="navbar-brand img-responsive text-center" to="/">
          <span><img src="/logoblack.png" class="img-fluid" alt="Company Logo"></span>
        </router-link>
      </div>
      <hr>
      <ul class="mynav nav nav-pills flex-column mb-auto">
        <template v-for="(link, index) in navLinks" :key="link.title+'-sidebar'">
        <li v-if="link.type == 'default'" class="nav-item mb-1">
          <router-link class="nav-link text-primary" :class="{'active':isActive(link.path) }" :to="link.path"><i :class="link.icon"></i> {{ link.title }}</router-link>
        </li>
        <li v-else-if="link.type == 'dropdown'" class="sidebar-item nav-item mb-1">
          <a class="sidebar-link text-primary" :class="{'active':isActive(link.path) }" :data-bs-target="'#'+link.id" @click="toggleCollapse(index, link.path)" :aria-expanded="link.isExpanded" aria-controls="ydelser">
            <i :class="link.icon"></i>
            <span class="topic"> {{ link.title }} </span>
          </a>
          <ul :id="link.id" class="sidebar-dropdown collapse padding-l-1-rest-0" :class="{'show':link.isExpanded}" data-bs-parent="#sidebar">
            <li v-for="ddlink in link.items" class="sidebar-item">
              <router-link :to="link.path+ddlink.path" class="sidebar-link text-primary" :class="{ 'active':isActive(link.path+ddlink.path) }">
                <i :class="ddlink.icon"></i>
                <span class="topic"> {{ ddlink.title }} </span>
              </router-link>
            </li>
          </ul>
        </li>
        </template>
      </ul>
      <hr>
    </div>

    <div class="container-fluid bg-light w-100 d-flex justify-content-between align-items-center d-lg-none navbar navbar-expand-lg">
      <div class="navbar-brand img-responsive">
        <router-link class="m-5" to="/">
          <span><img src="/logoblack.png" class="img-fluid" alt="Company Logo"></span>
        </router-link>
      </div>
      <div class="p-2 d-lg-none d-flex text-white bg-light justify-content-end">
        <button class="navbar-toggler" type="button" aria-label="Toggle sidebar" @click="toggleSidebar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { ref, reactive } from 'vue';
  import navitems from '../assets/navitems.json'
  import { useRouter } from "vue-router";
  export default {
    name: 'Sidebar',
    setup() {
      const router = useRouter();
      const navLinks = reactive(navitems); //nav items in the sidebar
      const isSidebarOpen = ref(false); //Tracks the sidebar state
      const toggleSidebar = () => isSidebarOpen.value = !isSidebarOpen.value;
      const closeSidebar = () => isSidebarOpen.value = false;
      const toggleCollapse = (index, path) => {
        navLinks[index].isExpanded = !navLinks[index].isExpanded
        if(!navLinks[index].isExpanded) router.push({ path: path })
      }

      return { navLinks, isSidebarOpen, toggleSidebar, closeSidebar, router, toggleCollapse };
    },
    methods: {
      isActive(path) {
        return this.$route.path == path
      },
    }
  }
  </script>
  
  <style scoped>

html, body { 
    height: 100%; 
    font-family: 'Ubuntu', sans-serif; 
} 

#bdSidebar {
  width: 300px;
  max-width: 80vw;
  position: fixed; /* Ensure sidebar is positioned over content */
  left: 0;
  transform: translateX(-100%); /* Start off-screen to the left */
  transition: transform 0.3s ease; /* Smooth transition for sliding effect */
  z-index: 1050;
}

#bdSidebar.sidebar-active {
  transform: translateX(0); /* Move into view */
}
  
.mynav { 
    color: #fff; 
} 
  
.mynav li a { 
    color: #fff; 
    text-decoration: none; 
    width: 100%; 
    display: block; 
    border-radius: 5px; 
    padding: 8px 5px; 
} 
  
.mynav li a.active { 
    background: rgba(0, 0, 0, 0.2); 
} 
  
.mynav li a:hover { 
    background: rgba(61, 61, 61, 0.2); 
} 
  
.mynav li a i { 
    width: 25px; 
    text-align: center; 
} 
  
.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040; /* Ensure it's below the sidebar but above other content */
}



  </style>
  