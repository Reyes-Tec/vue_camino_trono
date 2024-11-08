<template>
  <MainLayout>
    <section id="historia" class="mb-5">
      <div class="container">
        <div class="row" style="padding-top: 4rem">
          <div class="col-md-4 mb-4">
            <img src="/img/ejemplo1.jpeg" class="img-fluid rounded" alt="Image 1" />
          </div>
          <div class="col-md-4 mb-4">
            <img src="/img/ejemplo2.jpeg" class="img-fluid rounded" alt="Image 2" />
          </div>
          <div class="col-md-4 mb-4">
            <img src="/img/ejemplo1.jpeg" class="img-fluid rounded" alt="Image 3" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <img src="/img/ejemplo2.jpeg" class="img-fluid rounded" alt="Image 4" />
          </div>
          <div class="col-md-4 mb-4">
            <img src="/img/ejemplo1.jpeg" class="img-fluid rounded" alt="Image 5" />
          </div>
          <div class="col-md-4 mb-4">
            <img src="/img/ejemplo2.jpeg" class="img-fluid rounded" alt="Image 6" />
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>
<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  name: 'GaleriaPage',
  components: {
    MainLayout,
  },
}
</script>
