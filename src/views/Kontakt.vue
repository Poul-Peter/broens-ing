<template>
  <!-- Kontakt form -->
  <div class="container">
    <div class="py-5 row">
      <div class="text-center">
        <div class="mx-lg-4">
          <h1 class="display-5 fw-bold"> Kontakt os </h1>
          <p class="fs-4">Ring eller skriv til os, så sidder vi klar til at hjælpe!</p>
          <div class="row gx-lg-5 m-lg-3">
            <div class="col-12 col-lg-6 d-flex align-items-center">
              <ContactForm></ContactForm>
            </div>
            <div class="col-12 col-lg-6 d-flex align-items-center">
              <div class="container py-4">
                <img class="img-fluid" src="/businessman.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ring / Skriv -->
    <div class="pb-5 row">
      <div :class="{'col-lg-6':true, 'col-12':true, 'pl-0':index==1, 'pr-0':index==0}" v-for="(kontakt_item, index) in kontakt_muligheder">
        <div class="card bg-gray my-2">
          <div class="card-body text-center row my-3 my-lg-0">
            <div v-if="index == 0" class="col-lg-4 d-flex align-items-center justify-content-center mt-3 mt-lg-0">
              <a :href="kontakt_item.href">
                <i :class="[kontakt_item.icon, 'fa-5x']"></i>
              </a>
            </div>
            <div class="col-lg-8 py-3">
              <h2 class="fs-4">{{ kontakt_item.title }}</h2>
              <a class="text-decoration-none mb-0 h1" :href="kontakt_item.href">
                {{ kontakt_item.text }}
              </a>
            </div>
            <div v-if="index == 1" class="col-lg-4 d-flex align-items-center justify-content-center mb-2 mb-lg-0">
              <a :href="kontakt_item.href">
                <i :class="[kontakt_item.icon, 'fa-5x']"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Medarbejdere -->
    <div class="row gx-4 gx-lg-5">
      <div class="col-12 col-lg-4 mb-5" v-for="medarbejder in medarbejdere" :key="medarbejder.navn">
        <div class="card d-flex align-items-center text-center p-2" style="width: 100%;">
          <img :src="medarbejder.imgsrc" class="card-img-top" style="max-width: 87px;" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ medarbejder.navn }}</h5>
            <p class="card-text"> {{ medarbejder.rolle }} </p>
            <a :href="'mailto:'+medarbejder.email" class="btn btn-primary">Send Mail</a>
          </div>
        </div>
      </div>
    </div>
    <iframe
      class="mb-5"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75015.93327611852!2d8.66471246211325!3d55.191809913532374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b34d93f41c989%3A0x1ad9ab3909c255b1!2sBr%C3%B8ns%20Ingeni%C3%B8rfirma%20ApS!5e0!3m2!1sen!2sdk!4v1711712216451!5m2!1sen!2sdk"
      width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
import { ref } from 'vue';
import ContactForm from '../components/ContactForm.vue'
export default {
  name: 'Kontakt',
  components: {
    ContactForm
  },
  setup() {
    const medarbejdere = ref([
        { navn: 'Poul Peter Gad', rolle: 'Ingeniør, ejer', email: 'ppg@broens-ing.dk', imgsrc:'medarbejdere/person-img1.png' },
        { navn: 'Bente M. Andersen', rolle: 'Ingeniør, anerkendt statiker', email: 'bma@broens-ing.dk', imgsrc:'medarbejdere/person-img2.png' },
        { navn: 'Liva R. Sørensen', rolle: 'Kontorassistent', email: 'ls@broens-ing.dk', imgsrc:'medarbejdere/person-img3.png' },
    ]);
    const kontakt_muligheder = ref([
      {title:"Ring til kontoret", text:"74 75 34 24", icon:"fa-solid fa-phone", href:"tel:74753424" },
      {title:"Har du spørgsmål", text:"Skriv en email", icon:"fa-solid fa-envelope", href:"mailto:mail@broens-ing.dk" }
    ]);
    return { medarbejdere, kontakt_muligheder };
  }
}
</script>

<style scoped></style>