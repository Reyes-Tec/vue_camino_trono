<template>
  <header class="masthead mb-3">
    <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="text-center" id="home">
          <h1 class="mx-auto my-0 text-uppercase">¡Bienvenido a "Camino al Trono"!</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">
            Prepárate para sumergirte en una aventura inolvidable, donde tu habilidad para enfrentar
            enemigos, superar obstáculos y desvelar los secretos del trono será puesta a prueba.
            ¿Tienes lo necesario para reclamar la corona?
          </h2>
        </div>
      </div>
    </div>
  </header>

  <!-- Sección Principal -->

  <!-- Sección de Contenido -->
  <section id="inicio" class="mb-5">
    <!-- Video embebido -->

    <div class="ratio ratio-16x9 mb-4" style="max-width: 1150px; margin: 0 auto">
      <video src="/public/mp4/PROMOCIONAL.mp4" controls></video>
    </div>

    <!-- Primer Proyecto -->
    <div class="container px-7 px-lg-9">
      <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div class="col-lg-6">
          <img class="img-fluid" src="/img/paisaje.png" alt="Paisaje" />
        </div>
        <div class="col-lg-6">
          <div class="text-center h-100 project" style="background-color: #312d2b">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h5
                  class="underline-animation"
                  style="font-size: 30pt; font-family: fantasy; color: antiquewhite"
                >
                  SOBRE EL JUEGO
                </h5>
                <p class="underline-animation" style="padding: 2%; color: aliceblue">
                  Género y Jugabilidad "Camino al Trono" es un juego que mezcla mecánicas de combate
                  cuerpo a cuerpo, exploración en entornos vastos y desafiantes, y estrategias
                  basadas en la supervivencia. Los jugadores deben navegar por un mundo lleno de
                  contrastes: desde bosques oscuros y llenos de enemigos hasta castillos olvidados
                  que guardan secretos antiguos. Con una historia envolvente y gráficos nostálgicos,
                  el juego ofrece una experiencia única que pondrá a prueba tanto tu habilidad en
                  combate como tu capacidad para resolver desafíos estratégicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Segundo Proyecto -->
      <div class="row gx-0 justify-content-center">
        <div class="col-lg-6">
          <img class="img-fluid" src="/img/fotodos.png" alt="..." />
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="text-center h-100 project" style="background-color: #312d2b">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h5
                  class="underline-animation"
                  style="font-size: 30pt; font-family: fantasy; color: antiquewhite"
                >
                  OBJETIVO DEL JUGADOR
                </h5>
                <p class="underline-animation" style="padding: 2%; color: aliceblue">
                  Tu misión es guiar a Arthor, el legítimo heredero del trono, a través de un reino
                  devastado por la guerra y la oscuridad. A lo largo de tu aventura, deberás
                  desbloquear habilidades especiales, enfrentarte a criaturas místicas y derrotar a
                  los líderes corruptos que han sumido a Astalion en el caos. Cada región presenta
                  desafíos diferentes, y las armas como la espada y el arco te permitirán adaptarte
                  a combates cercanos y a distancia. Sólo los más hábiles podrán reclamar el trono y
                  restaurar la paz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botón de Descarga -->

    <br />
    <div class="text-center">
      <button class="descarga btn text-center" @click="showMessage">
        <div class="button-text">
          DESCARGAR<br />
          VIDEOJUEGO
        </div>
        <div id="clip">
          <div id="leftTop" class="corner"></div>
          <div id="rightBottom" class="corner"></div>
          <div id="rightTop" class="corner"></div>
          <div id="leftBottom" class="corner"></div>
        </div>
        <span id="rightArrow" class="arrow"></span>
        <span id="leftArrow" class="arrow"></span>

      </button>

      <div
        v-if="showWarning"
        class="alert alert-warning d-flex justify-content-center align-items-center "
      >
        <span class="me-3"
          >Este juego es solo compatible con PC. ¿Quieres continuar con la descarga?</span
        >
        <button @click="downloadGame" class="btn btn-link me-2">Sí, descargar</button>
        <button @click="closeWarning" class="btn-close" aria-label="Close">×</button>
      </div>
    </div>
  </section>
</template>
<style>
#home {
  margin-top: 10rem;
}
.descarga {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
}

.button-text {
  line-height: 1.5;
}
.alert {
  position: relative;
  width: 100%; /* Asegura que la alerta ocupe el ancho completo */
  text-align: center;
}

.me-3 {
  margin-right: 1rem; /* Espacio entre el texto y los botones */
}

.me-2 {
  margin-right: 0.5rem; /* Espacio entre los botones */
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: #333;
}
</style>
<script>
export default {
  data() {
    return {
      showWarning: false,
    }
  },
  methods: {
    showMessage() {
      this.showWarning = true
    },
    closeWarning() {
      this.showWarning = false
    },
    downloadGame() {
      window.location.href =
        'https://github.com/Reyes-Tec/vue_camino_trono/releases/download/untagged-667ee2336b44a7f8264f/Camino.al.trono.exe'
    },
  },
}
</script>
