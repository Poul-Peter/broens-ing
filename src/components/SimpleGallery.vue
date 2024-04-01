<template>
  <div :id="galleryID" class="row d-flex justify-content-center">
    <template v-if="batches">
      <div class="row mb-3" v-for="(batch, index) in imagesData">
        <h3> {{ batch.title }} </h3>
        <div class="col-6 col-lg-4 col-xl-4 my-2" v-for="(image, index) in batch.images">
            <a 
            :key="galleryID+'_item_'+index" 
            :href="image.largeURL" 
            :data-pswp-width="image.width" 
            :data-pswp-height="image.height"
              target="_blank" rel="noreferrer">
              <img class="border-top border border-black" :src="image.thumbnailURL" alt="" width="100%" />
            </a>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="col-6 my-2" v-for="(image, index) in imagesData">
          <a 
          :key="galleryID+'_item_'+index" 
          :href="image.largeURL" 
          :data-pswp-width="image.width" 
          :data-pswp-height="image.height"
            target="_blank" rel="noreferrer">
            <img class="border-top border border-black" :src="image.thumbnailURL" alt="" width="100%" />
          </a>
      </div>
    </template>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { ref } from 'vue';

export default {
  name: 'SimpleGallery',
  props: {
    galleryID: String,
    images: Array,
  },
  setup(props) {
    const batches = props?.images[0]?.title ? true : false;
    return {
      imagesData: props.images,
      batches: batches
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  methods: {},
};
</script>