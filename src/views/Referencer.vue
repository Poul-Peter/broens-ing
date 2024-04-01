<template>
  <div class="container mb-5">
    <div class="py-5 row d-flex">
      <div class="col-12 text-md-center">
        <h1 class="display-5 fw-bold"> Referencer </h1>
        <h5 class="border-bottom pb-4" >Her er nogle af de projekter, hvor vi har leveret beregninger og/eller tegninger:</h5>
      </div>
      <div class="col-12 my-2 d-flex justify-content-center border-bottom pb-4">
        <ul class="list-group text-start w-100 d-flex justify-content-center">
          <li class="list-group-item fs-5 border-0" v-for="place in places"> {{ place }}</li>
        </ul>
      </div>
    </div>

    <div class="col-12 mb-4">
      <SimpleGallery :galleryID="'image-gallery-referencer'" :images="image_batches" />
    </div>
    
  </div>
</template>

  
<script>
import { ref } from 'vue';
import SimpleGallery from '../components/SimpleGallery.vue';

export default {
  name: 'Referencer',
  components: {
    SimpleGallery
  },
  setup() {
      const places = ref([
        'Hunderupskolen, Odense',
        'Bruuns Galleri, Århus',
        'Tarco, Fyn',
        'Roug, Herning',
        'Hjallesehallen, Odense',
        'Hydro Agri, Randers',
        'Blue Water, Esbjerg',
        'Bilfakta A/S, Odense',
        'Louisiana, Humlebæk',
        'Vestjysk Sygehus – 3. parts kontrol',
        'Bladt Industries, Valsehal, Aalborg',
      ]);

      const image_batches = ref([
        {
          title: 'Hunderupskolen, Odense',
          images: [
            { width:400, height: 300, largeURL: '/referencer/hunderup_1.webp', thumbnailURL: '/referencer/hunderup_1.webp',  },
            { width:400, height: 300, largeURL: '/referencer/hunderup_2.webp', thumbnailURL: '/referencer/hunderup_2.webp',  },
            { width:400, height: 300, largeURL: '/referencer/hunderup_3.webp', thumbnailURL: '/referencer/hunderup_3.webp',  },
          ]
        },
        {
          title: 'Vestjysk Sygehus – 3. parts kontrol, Viborg',
          images: [
            { width:400, height: 300, largeURL: '/referencer/viborg_1.webp', thumbnailURL: '/referencer/viborg_1.webp',  },
            { width:400, height: 300, largeURL: '/referencer/viborg_2.webp', thumbnailURL: '/referencer/viborg_2.webp',  },
            { width:400, height: 300, largeURL: '/referencer/viborg_3.webp', thumbnailURL: '/referencer/viborg_3.webp',  },
          ]
        },
        {
          title: 'Stald, Gesten',
          images: [
            { width:400, height: 300, largeURL: '/referencer/gesten_1.webp', thumbnailURL: '/referencer/gesten_1.webp',  },
            { width:400, height: 300, largeURL: '/referencer/gesten_2.webp', thumbnailURL: '/referencer/gesten_2.webp',  },
          ]
        },
        {
          title: 'Bruuns Galleri, Århus',
          images: [
            { width:400, height: 300, largeURL: '/referencer/bruuns_1.webp', thumbnailURL: '/referencer/bruuns_1.webp',  },
            { width:400, height: 300, largeURL: '/referencer/bruuns_2.webp', thumbnailURL: '/referencer/bruuns_2.webp',  },
          ]
        },
        {
          title: 'Industrihal, Kolding',
          images: [
            { width:400, height: 300, largeURL: '/referencer/kolding_1.webp', thumbnailURL: '/referencer/kolding_1.webp',  },
            { width:400, height: 300, largeURL: '/referencer/kolding_2.webp', thumbnailURL: '/referencer/kolding_2.webp',  },
          ]
        },
        {
          title: 'Roug, Herning',
          images: [
            { width:400, height: 300, largeURL: '/referencer/roug_1.webp', thumbnailURL: '/referencer/roug_1.webp',  },
          ]
        },
        {
          title: 'Frysehus, Vejle',
          images: [
            { width:400, height: 300, largeURL: '/referencer/vejle_1.jpg', thumbnailURL: '/referencer/vejle_1.jpg',  },
          ]
        },
        
    ]);
    return { image_batches, places };
  }
}

</script>

<style scoped>
  .list-group{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1000px;
  }

</style>

  