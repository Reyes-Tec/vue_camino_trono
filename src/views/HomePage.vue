<!-- src/views/HomePage.vue -->
<template>
  <header class="masthead mb-3">
    <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div class="d-flex justify-content-center">
        <div class="text-center">
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
  <MainLayout>
    <!-- Sección Principal -->

    <!-- Sección de Contenido -->
    <section id="inicio" class="mb-5">
      <!-- Video embebido -->
      <div class="ratio ratio-16x9 mb-4">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
      </div>

      <!-- Primer Proyecto -->
      <div class="container px-9 px-lg-11">
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
                    Género y Jugabilidad "Camino al Trono" es un juego que mezcla mecánicas de
                    combate cuerpo a cuerpo, exploración en entornos vastos y desafiantes, y
                    estrategias basadas en la supervivencia. Los jugadores deben navegar por un
                    mundo lleno de contrastes: desde bosques oscuros y llenos de enemigos hasta
                    castillos olvidados que guardan secretos antiguos. Con una historia envolvente y
                    gráficos nostálgicos, el juego ofrece una experiencia única que pondrá a prueba
                    tanto tu habilidad en combate como tu capacidad para resolver desafíos
                    estratégicos.
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
                    Tu misión es guiar a Arthor, el legítimo heredero del trono, a través de un
                    reino devastado por la guerra y la oscuridad. A lo largo de tu aventura, deberás
                    desbloquear habilidades especiales, enfrentarte a criaturas místicas y derrotar
                    a los líderes corruptos que han sumido a Astalion en el caos. Cada región
                    presenta desafíos diferentes, y las armas como la espada y el arco te permitirán
                    adaptarte a combates cercanos y a distancia. Sólo los más hábiles podrán
                    reclamar el trono y restaurar la paz.
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
        <button class="descarga" id="descarga">
          DESCARGAR
          <br />
          VIDEOJUEGO
          <div id="clip">
            <div id="leftTop" class="corner"></div>
            <div id="rightBottom" class="corner"></div>
            <div id="rightTop" class="corner"></div>
            <div id="leftBottom" class="corner"></div>
          </div>
          <span id="rightArrow" class="arrow"></span>
          <span id="leftArrow" class="arrow"></span>
        </button>
      </div>
    </section>
  </MainLayout>
</template>

<script>
import MainLayout from '../components/MainLayout.vue'

export default {
  name: 'HomePage',
  components: {
    MainLayout,
  },
}
</script>

<style scoped>
/* Puedes añadir aquí estilos específicos para el componente de HomePage si lo necesitas */
.descarga {
  position: relative;
  width: 15em;
  height: 6em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 1em;
  font-weight: bold;
  color: #ffffff;
}

#clip {
  --color: #121212;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #0b0b0b;
  -webkit-clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

.arrow {
  position: absolute;
  transition: 0.2s;
  background-color: #000000;
  top: 35%;
  width: 11%;
  height: 30%;
}

#leftArrow {
  left: -13.5%;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

#rightArrow {
  -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 110%;
}

.descarga:hover #rightArrow {
  background-color: #434343;
  left: -15%;
  animation: 0.6s ease-in-out both infinite alternate rightArrow8;
}

.descarga:hover #leftArrow {
  background-color: #111110;
  left: 110%;
  animation: 0.6s ease-in-out both infinite alternate leftArrow8;
}

.corner {
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #313030;
  box-shadow: inset 1px 1px 8px #0f0b09;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
}

#rightTop {
  top: -2em;
  left: 92%;
}

#leftTop {
  top: -2em;
  left: -3em;
}

#leftBottom {
  top: 2.2em;
  left: -2.2em;
}

#rightBottom {
  top: 45%;
  left: 90%;
}

.descarga:hover .corner {
  transform: scale(1.25) rotate(45deg);
}

.descarga:hover #clip {
  animation: 0.2s ease-in-out 0.55s both greenLight8;
  --color: #3b3735;
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .descarga {
    width: 12em;
    height: 5em;
    font-size: 0.9em;
  }

  .corner {
    width: 3.5em;
    height: 3.5em;
  }
}

@media (max-width: 480px) {
  .descarga {
    width: 10em;
    height: 4em;
    font-size: 0.8em;
  }

  .corner {
    width: 3em;
    height: 3em;
  }
}

@keyframes changeColor8 {
  from {
    background-color: #201f1e;
  }

  to {
    background-color: #201d1c;
  }
}

@keyframes lightEffect8 {
  from {
    box-shadow: 1px 1px 5px #6f6f6e;
  }

  to {
    box-shadow: 0 0 2px #221f1d;
  }
}

@keyframes greenLight8 {
  from {
  }

  to {
    box-shadow: inset 0px 0px 32px #6d6d6d;
  }
}

@keyframes leftArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(10px);
  }
}

@keyframes rightArrow8 {
  from {
    transform: translate(0px);
  }

  to {
    transform: translateX(-10px);
  }
}
.underline-animation {
  display: inline-block;
  position: relative;
  color: #000000;
}

.underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fde31a;
  bottom: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease-out;
}

.underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.bounce {
  animation: bounce 2s ease infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
#cartel {
  font-family: 'Permanent Marker', cursive;
  font-size: 70px;
  color: white;
  background-color: #7a3c09d3;
  padding: 20px;
  text-align: center;
  border: 4px solid #fdd40a50;
  text-shadow: 2px 2px 0 #000000;
}

.projects-section {
  text-align: center;
  color: black;
  background: #d2a06a;
  border-radius: 4%;
  padding: 1%;
}
.card-img-top {
  width: 50%;
  border-radius: 50%;
  opacity: 0.8;
}
.card-title {
  font-size: 20pt;
  font-smooth: initial;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.masthead {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 50rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%),
    url('../img/intro.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}
.masthead h1,
.masthead .h1 {
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
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: 0.5rem;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.masthead h2,
.masthead .h2 {
  max-width: 20rem;
  font-size: 1rem;
}
@media (min-width: 768px) {
  .masthead h1,
  .masthead .h1 {
    font-size: 4rem;
    line-height: 4rem;
  }
}
@media (min-width: 992px) {
  .masthead {
    height: 100vh;
    padding: 0;
  }
  .masthead h1,
  .masthead .h1 {
    font-size: 6.5rem;
    line-height: 6.5rem;
    letter-spacing: 0.8rem;
  }
  .masthead h2,
  .masthead .h2 {
    max-width: 30rem;
    font-size: 1.25rem;
  }
}

.about-section {
  padding-top: 10rem;
  background: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0.8) 100%);
}
</style>
