<template>
<footer class="text-center text-lg-start bg-body-tertiary text-muted bottom-footer">
  <section class="d-flex justify-content-center p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Find os på de sociale medier:</span>
    </div>
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i> Brøns Ingeniørfirma ApS
          </h6>
          <p>
            Vi udfører statiske beregninger og overslagsdimensionering i forbindelse med tilbudsgivning på alle former for bygningskonstruktioner indenfor bygningsmaterialerne beton, stål, træ, murværk og fundering.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Ydelser
          </h6>
          <p v-for="link in ydelser" :key="link.title+'-footer'">
            <router-link class="text-reset" :to="'/ydelser'+link.path">{{ link.title }}</router-link>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Hjælpsomme links
          </h6>
          <p v-for="link in helpful_links" :key="link.title+'-footer-1'">
            <router-link class="text-reset" :to="link.path">{{ link.title }}</router-link>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Damvej 12, Brøns 6780, Skærbæk</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            mail@broens-ing.dk
          </p>
          <p><i class="fa-solid fa-fax me-3"></i> Fax: 74 75 31 20</p>
          <p><i class="fas fa-phone me-3"></i> Ring: 74 75 34 24</p>
          <p><i class="fa-solid fa-id-card-clip me-3"></i> CVR: 25534700</p>
        </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="http://broens-ing.dk/"> Brøns Ingeniørfirma ApS</a>
  </div>
</footer>
</template>

<script>
 import { ref } from 'vue';
export default {
  name: 'Footer',
  props: {
    ydelser: {
      type: Array,
      default: () => ([]) 
    },
    helpful_links: {
      type: Array,
      default: () => ([]) 
    },
  },
  setup() {

  }
}

</script>

<style>
.bottom-footer {
  margin-top: auto;
}
</style>
