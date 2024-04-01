<template>
  <div class="container my-5">
    <div class="row text-left mx-lg-0 mx-3">
      <div class="text-left">

        <h1 class="fw-bold pb-2">Ydelser</h1>
        <h4 class="fs-5">Hos Brøns Ingeninørfirma tilbyder vi: </h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item fs-5 d-flex align-items-center" v-for="item in ydelse_checklist">
            <i class="fa-sharp fa-solid fa-check text-success"></i> <span class="p-2">{{ item }} </span>
          </li>
        </ul>

      </div>
    </div>
    <div class="card text-white bg-primary my-5 py-4 text-center">
      <div class="card-body">
        <p class="text-white m-0">This call to action card is a great place to showcase some important information or
          display a clever tagline!</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 p-0 my-2" v-for="ydelse in ydelser">
        <div class="card h-100 p-4 m-2">
          <div class="card-body">
            <div class="py-2">
              <i :class="ydelse.icon+' fa-3x'"></i>
            </div>
            <h5 class="card-title">{{ ydelse.title }}</h5>
            <p class="card-text">{{ ydelse.text }}</p>
            <router-link :to="'/ydelser'+ydelse.path" class="btn btn-primary">Læs mere her!</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
  
  <script>
  import { ref } from 'vue';
  import navitems from '../assets/navitems.json';
  export default {
    name: 'YdelserRoot',
    setup() {
      const ydelser = ref(navitems.find(item => item.path == '/ydelser').items);
      const ydelse_checklist = ref([
        'Overslagsberegninger til fastsættelse af dimensioner i forbindelse med tilbud.',
        'Udarbejdelse af hele eller dele af den statiske dokumentation.',
        'Bygværksprojekterende, hvor der udarbejdes konstruktionsgrundlag A1.1, statiske beregninger A2.1 og statiske beregninger A2.2 konstruktionsafsnit, samt samarbejde/koordinering med evt. leverandører. Desuden udarbejdelse af B1.1 Statisk projektredegørelse, B2.1.1 Statisk kontrolplan, B2.2.1 Statisk kontrolplan udførelse, B3.1.1 Statisk kontrolrapport projektering.',
        'Udarbejdelse af statiske beregninger for konstruktionsafsnit. F.eks. Fundamentsberegninger, beregning af stålrammekonstruktion, åseberegning, bjælkelag, altaner, trapper mv.',
        'I forbindelse med statisk dokumentation for KK2-KK4 konstruktioner har vi ingen faste samarbejdspartnere, men har gennem tiden haft kontakt til mange forskellige som vi kan henvise til.'
      ])
      return {
        ydelser, 
        ydelse_checklist
      }
    }
  }
  </script>