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
    <!-- Botón de Descarga -->
    <!-- Botón de Descarga -->
    <div class="d-flex flex-column align-items-center" >
      <button class="brutalist-button text-center" @click="showMessage">
        <div class="ms-logo">
          <img src="/img/logo.png" class="rounded" height="40" />
        </div>
        <div class="button-text text-center" id="descarga">
          <span>DESCARGAR</span>
          <span>VIDEOJUEGO</span>
        </div>
      </button>

      <!-- Alerta de Compatibilidad -->
      <div
        v-if="showWarning"
        class="alert alert-warning alert-dismissible text-center mt-3 w-75"
        style="max-width: 500px"
      >
        <span> Este juego es solo compatible con PC. ¿Quieres continuar con la descarga? </span>
        <button @click="downloadGame" class="btn btn-link ms-2">Sí, descargar</button>
        <button @click="closeWarning" class="btn-close" aria-label="Close"></button>
      </div>
    </div>
  </section>
</template>
<style>
#home {
  margin-top: 10rem;
}
.alert-dismissible {
  padding: 15px;
  font-size: 14px;
}

#descarga {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
}

.brutalist-button {
  display: flex;
  align-items: center;
  justify-content: center; /* Centra el contenido del botón horizontalmente */
  flex-wrap: wrap; /* Permite que el texto se ajuste en múltiples líneas en pantallas pequeñas */
  cursor: pointer;
  width: 80%;
  max-width: 500px;
  height: 60px;
  background-color: white;
  color: #000;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: 3px solid #fff;
  outline: 3px solid #000;
  box-shadow: 6px 6px 0 #efaf00;
  transition: all 0.1s ease-out;
  padding: 0 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.brutalist-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  z-index: 1;
  opacity: 0;
}

@keyframes slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.brutalist-button:hover::before {
  opacity: 1;
  animation: slide 2s infinite;
}

.brutalist-button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0 #000;
  background-color: #000;
  color: #fff;
}

.brutalist-button:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0 #ffa201;
  background-color: #fff;
  color: #00000073;
  border-color: #000;
}

.ms-logo {
  display: flex; /* Cambiado a flex para centrar el contenido fácilmente */
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin-right: 10px;
  flex-shrink: 0;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 1;
}

.brutalist-button:hover .ms-logo {
  transform: rotate(-10deg) scale(1.1);
}

.brutalist-button:active .ms-logo {
  transform: rotate(10deg) scale(0.9);
}

.button-text {
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinea el texto en el centro */
  line-height: 1.2;
  transition: transform 0.2s ease-out;
  position: relative;
  z-index: 4;
  text-align: center;
}

.brutalist-button:hover .button-text {
  transform: skew(-5deg);
}

.brutalist-button:active .button-text {
  transform: skew(5deg);
}

.button-text span:first-child {
  font-size: 11px;
  text-transform: uppercase;
}

.button-text span:last-child {
  font-size: 16px;
  text-transform: uppercase;
}

/* Responsividad para pantallas medianas */
@media (max-width: 768px) {
  .brutalist-button {
    width: 90%;
    height: 50px;
  }

  .button-text span:first-child {
    font-size: 10px;
  }

  .button-text span:last-child {
    font-size: 14px;
  }

  .ms-logo {
    width: 20px;
    height: 20px;
  }
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 576px) {
  .brutalist-button {
    width: 100%;
    height: auto; /* Permite que la altura se ajuste automáticamente */
    font-size: 14px;
    padding: 10px 15px;
  }

  .ms-logo {
    width: 20px;
    height: 20px;
    margin-right: 5px; /* Ajuste de margen para pantallas pequeñas */
  }

  .button-text span:first-child {
    font-size: 10px;
  }

  .button-text span:last-child {
    font-size: 12px;
  }
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
        'https://github.com/Reyes-Tec/vue_camino_trono/releases/download/juego/Camino_Al_Trono.exe'
    },
  },
}
</script>
