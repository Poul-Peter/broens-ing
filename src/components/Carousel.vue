<template>
  <div id="carouselAutoplaying" class="carousel slide carousel-fade half-height t-0" data-bs-ride="carousel">
    <div class="carousel-inner half-height d-flex align-items-center w-100">
      <div :class="{'carousel-item':true, 'active':index == 0}" v-for="(slide, index) in slides" :key="slide.src">
        <img :src="slide.src" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
        <h5>{{ slide.title }}</h5>
        <p>{{ slide.text }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Carousel',
  setup() {
    const slides = ref([
      {'src': '/slides/slide1.webp', title:'Slide 1 title text', text: 'Slide 1 description text'},
      {'src': '/slides/slide2.webp', title:'Slide 2 title text', text: 'Slide 2 description text'},
      {'src': '/slides/slide3.webp', title:'Slide 3 title text', text: 'Slide 3 description text'},
    ])
    return { slides };
  }
}
</script>

<style>
.half-height {
  max-height: 55vh;
}
.carousel-item img {
  height: 100%; /* Ensure the image covers the carousel item's height */
  object-fit: cover; /* Cover the container without stretching */
  object-position: center; /* Center the image within the container */
}
.carousel-item {
  transition: transform 1.6s ease-out;
}

.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  transition: opacity 0s 1.6s;
}



</style>