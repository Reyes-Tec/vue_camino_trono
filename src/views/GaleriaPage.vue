<template>
  <section id="historia" class="mb-5">
    <div class="container">
      <div class="row" style="padding-top: 10rem">
        <div class="col-md-4 mb-4" v-for="img in images" :key="img">
          <img :src="img" class="img-fluid gallery-image" :alt="'Image ' + img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/img/1.png', '/img/2.png', '/img/3.png', '/img/4.png',
        '/img/5.png', '/img/6.png', '/img/7.png', '/img/8.png',
        '/img/9.png', '/img/10.png', '/img/11.png', '/img/12.png'
      ]
    }
  }
}
</script>

<style scoped>
/* Estilo de la galería */
.gallery-image {
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in-out;
}

/* Efecto hover */
.gallery-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Animación de aparición */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
