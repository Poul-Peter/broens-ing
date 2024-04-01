<template>
    <div class="container my-5">
      <div class="row text-left mx-lg-0 mx-3">

          <h1 class="fw-bold">Stålrammer</h1>
          <h4>Vi tilbyder bla bla bla, ved følgende fremgangsmåde:</h4>
          <ul class="list-group list-group-numbered col-lg-6 pb-5 fs-5 text-start">
            <li class="list-group-item border-0"> Overslagsberegning til tilbudsgivning </li>
            <li class="list-group-item border-0"> Gennemkørsel, en nøjagtig dimension </li>
            <li class="list-group-item border-0"> Beregning, statisk beregning af rammen med samlinger </li>
          </ul>
          <div class="col-12">
            <SimpleGallery :galleryID="'image-gallery-staalrammer'" :images="images" />
          </div>


      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import SimpleGallery from '../components/SimpleGallery.vue';

export default {
    name:'Stålrammer',
    components: {
        SimpleGallery
    },
    setup() {
        const images = ref([
          { width:1046, height: 746, largeURL: '/staalrammer_1.webp', thumbnailURL: '/staalrammer_1.webp',  },
          { width:1046, height: 746, largeURL: '/staalrammer_2.webp', thumbnailURL: '/staalrammer_2.webp',  },
        ]);
        return {
          images
        }
    },
}
</script>