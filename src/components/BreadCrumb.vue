<template>
  <nav class="breadcrumb-nav"  aria-label="breadcrumb">
    <div class="container mt-0">
      <ol class="breadcrumb mb-0 px-4 py-3">
        <li :class="{'breadcrumb-item':true, 'active': lastBreadCrumb(index)}" v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link :to="crumb.to">{{ crumb.label }}</router-link>
        </li>
      </ol>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    methods: {
      lastBreadCrumb(index) {
        return index == this.breadcrumbs.length - 1;
      },
    },
    computed: {
      breadcrumbs() {
        const route = this.$route;
        const matchedRoutes = route.matched;
        return matchedRoutes.map((routeItem) => ({
          label: routeItem.meta.breadcrumb || routeItem.name,
          to: routeItem.path
        }));
      },
    }
  };
  </script>
  