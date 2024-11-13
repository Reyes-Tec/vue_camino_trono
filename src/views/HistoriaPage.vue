<template>
  <section id="historia" class="mb-5">
    <div class="container" id="imagehistory">
  <div class="row">
    <!-- Primera imagen en fila vertical -->
    <div class="col-12 mb-4" style="padding-top: 4rem">
      <img
        src="/img/pergaminoHistoria1.png"
        class="img-fluid fade-in-up"
        style="animation-delay: 0.2s"
        alt="Descripción de la primera imagen"
      />
    </div>
    <!-- Segunda imagen en fila vertical -->
    <div class="col-12 mb-4">
      <img
        src="/img/pergaminoHistoria2.png"
        class="img-fluid fade-in-up"
        style="animation-delay: 0.4s"
        alt="Descripción de la segunda imagen"
      />
    </div>
  </div>
</div>

  </section>
</template>
<style>

#imagehistory{
  margin-top: 5rem;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0; /* Comienza invisible */
  animation: fadeInUp 3s ease forwards;
}

</style>
