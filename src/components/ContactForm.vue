<template>
  <div class="container py-4">

    <!-- Bootstrap 5 starter form -->
    <form id="contactForm">

      <!-- Name input -->
      <div class="mb-3 text-start">
        <label class="form-label" for="name">Navn *</label>
        <input class="form-control" id="name" type="text" placeholder="" />
      </div>

      <!-- Email address input -->
      <div class="mb-3 text-start">
        <label class="form-label" for="emailAddress">Email *</label>
        <input class="form-control" id="emailAddress" type="email" placeholder="" />
      </div>

      <!-- Telefon -->
      <div class="mb-3 text-start">
        <label class="form-label" for="telefon">Telefon *</label>
        <input class="form-control" id="telefon" type="number" placeholder="" />
      </div>

      <!-- Message input -->
      <div class="mb-3 text-start">
        <label class="form-label" for="message">Besked *</label>
        <textarea class="form-control" id="message" type="text" placeholder="" style="height: 10rem;"></textarea>
      </div>

      

      <!-- Form submit button -->
      <div class="d-grid">
        <button class="btn btn-primary btn-lg" type="submit">Send</button>
      </div>
    </form>
  </div>


</template>

<script>
export default {
  name: 'ContactForm',
  setup() {

  },
  data() {
    return {

    }
  }
}
</script>