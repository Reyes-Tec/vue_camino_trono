<!-- src/components/MainLayout.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container" id="input">
        <router-link class="navbar-brand" to="/">
          <i class="fas fa-crown"></i> Camino al Trono
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" id="nav">
              <router-link class="nav-link" to="/">
                <img src="/img/home.png" width="20" alt="Inicio" class="me-2" />
                Inicio
              </router-link>
            </li>
            <li class="nav-item" id="nav">
              <router-link class="nav-link" to="/historia">
                <img src="/img/historia.png" width="20" alt="Historia" class="me-2" />
                Historia
              </router-link>
            </li>
            <li class="nav-item" id="nav">
              <router-link class="nav-link" to="/galeria">
                <img src="/img/galeria.png" width="20" alt="Galería" class="me-2" />
                Galería
              </router-link>
            </li>
            <li class="nav-item" id="nav">
              <router-link class="nav-link" to="/soporte">
                <img src="/img/soporte.png" width="20" alt="Soporte" class="me-2" />
                Soporte
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container mt-5">
      <slot></slot>
      <!-- Aquí se inyectará el contenido de cada página -->
    </main>

    <footer class="bg-dark text-center text-white py-3 mt-5" id="footer">
      <p style="text-align: center">&copy; 2024 Camino al Trono. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style lang="css" scoped>
#titulo {
  font-family:
    Caesar Dressing,
    cursive;
  font-size: 50pt;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
}
/* Estructura de la página para mantener el footer abajo */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

main {
  flex: 1;
}

footer,
.navbar {
  background-color: #312d2b; /* O elige otra opción que prefieras */
  color: #ffffff; /* Mantén el texto en blanco para un buen contraste */
  padding: 10px 20px; /* Espaciado interno */
  box-shadow: 0 2px 5px rgba(249, 150, 0, 0.833); /* Sombra para dar profundidad */
}
#nav {
  font-size: 12pt;
  background-color: transparent;
  border: none;
  padding: 10px;
  color: rgb(136, 91, 73);
  display: flex;
  position: relative;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}
#nav:not(:active):hover,
#nav:focus {
  background-color: #8d4f2f;
}
#nav:focus,
#nav:active {
  background-color: #888685;
  outline: none;
}
#nav::before {
  content: '';
  position: absolute;
  top: 30px;
  right: 0px;
  width: 100%;
  height: 3px;
  background-color: #8e8a89;
  border-radius: 5px;
  opacity: 0;
}

#nav:focus::before,
#nav:active::before {
  opacity: 1;
}

#nav svg {
  width: 15px;
}
#input {
  display: flex;
  width: 100vw; /* 100% del ancho de la pantalla */
  height: fit-content;
  color: white; /* Texto blanco */
  justify-content: center;
  align-items: center; /* Alinea los elementos al centro vertical */
  border-radius: 5px;
  gap: 7.5px;
  padding: 0;
}
</style>
