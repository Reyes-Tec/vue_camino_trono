<template>
  <section class="contact-section">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100 fade-in-up" style="animation-delay: 0.2s">
            <div class="card-body text-center">
              <i class="fas fa-map-marked-alt text-primary mb-2"></i>
              <h3 style="color: black">REQUISITOS PREVIOS</h3>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50">
                <h4 style="color: black">Hadware:</h4>
                <ul style="color: black">
                  <li>CPU: Procesador con soporte para SSE2.</li>
                  <li>RAM: Al menos 2 GB (4 GB recomendados).</li>
                  <li>Almacenamiento: Al menos 5 GB inlcluso algunos más.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100 fade-in-up" style="animation-delay: 0.4s">
            <div class="card-body text-center">
              <i class="fas fa-envelope text-primary mb-2"></i>
              <h3 style="color: black">GUÍAS Y TUTORIALES</h3>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50">
                <br />
                <br />
                <h4><a href="/#descarga" style="color: black">Ir al apartado de descarga</a></h4>
                <br />
                <h4>
                  <a
                    href="https://github.com/Reyes-Tec/vue_camino_trono/releases/download/manual/Manual.Videojuego.CAMINO.AL.TRONO.pdf"
                    style="color: black"
                    download="Manual.Videojuego.CAMINO.AL.TRONO.pdf"
                  >
                    MANUAL DE USUARIO: APRENDE A JUGAR
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 mb-md-0">
          <div class="card py-4 h-100 fade-in-up" style="animation-delay: 0.6s">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt text-primary mb-2"></i>
              <h3 style="color: black">CONTACTOS</h3>
              <hr class="my-4 mx-auto" />
              <div class="small text-black-50">
                <h4 style="color: black; text-transform: lowercase">chucdaniel66@gmail.com</h4>
                <br />
                <h4 style="color: black; text-transform: lowercase">e.alejandra2106@gmail.com</h4>
                <br />
                <h4 style="color: black; text-transform: lowercase">karenquijano2406@gmail.com</h4>
                <br />
                <h4 style="color: black; text-transform: lowercase">tecconcepcion09@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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
  animation: fadeInUp 1s ease forwards;
}

.contact-section {
  padding-top: 12rem;
  padding-bottom: 6rem;
}
.contact-section .card {
  border: 0;
  border-bottom: 0.25rem solid #ffc767;
}
.contact-section .card h4,
.contact-section .card .h4 {
  font-size: 0.8rem;
  font-family:
    'Varela Round',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
  text-transform: uppercase;
  letter-spacing: 0.15rem;
}
.contact-section .card hr {
  opacity: 1;
  border-color: #ffc767;
  border-width: 0.25rem;
  width: 3rem;
}
.contact-section .social {
  margin-top: 5rem;
}
.contact-section .social a {
  text-align: center;
  height: 3rem;
  width: 3rem;
  background: rgba(255, 160, 26, 0.826);
  border-radius: 100%;
  line-height: 3rem;
  color: rgba(0, 0, 0, 0.897);
}

.projects-section {
  background-color: #000; /* Color de fondo */
  opacity: 0.5; /* Define la transparencia, 0.5 equivale al 50% */
}
</style>
