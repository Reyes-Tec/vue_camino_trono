<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="/" style="color: white;"><img src="/img/logojuego.png" width="80" alt="Inicio" class="me-2">Camino al Trono</a>

      <!-- Botón de menú alineado a la derecha en todas las vistas -->
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" id="nav">
            <a class="nav-link d-flex align-items-center" href="/">
              <img src="/img/home.png" width="20" alt="Inicio" class="me-2" /> Inicio
            </a>
          </li>
          <li class="nav-item" id="nav">
            <a class="nav-link d-flex align-items-center" href="historia">
              <img src="/img/historia.png" width="20" alt="Historia" class="me-2" /> Historia
            </a>
          </li>
          <li class="nav-item" id="nav">
            <a class="nav-link d-flex align-items-center" href="galeria">
              <img src="/img/galeria.png" width="20" alt="Galería" class="me-2" /> Galería
            </a>
          </li>
          <li class="nav-item" id="nav">
            <a class="nav-link d-flex align-items-center" href="soporte">
              <img src="/img/soporte.png" width="20" alt="Soporte" class="me-2" /> Soporte
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
/* Estilos principales */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
}

.navbar-toggler {
  margin-left: auto; /* Alinea el botón al margen derecho */
}

/* Estilos para los elementos del menú */
#nav {
  font-size: 12pt;
  background-color: transparent;
  padding: 10px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

#nav a {
  display: flex;
  align-items: center;
  width: 100%; /* Hace que el enlace ocupe todo el área del contenedor */
  padding: 10px;
  color: inherit; /* Hereda el color del contenedor */
  text-decoration: none; /* Quita subrayado del texto */
}

#nav:hover {
  background-color: #8d4f2f;
}

#nav:active {
  background-color: #888685;
  outline: none;
}

/* Ajustes para centrar el contenido en la vista móvil */
@media (max-width: 768px) {
  .navbar-collapse {
    justify-content: center;
  }
  #titulo {
    font-size: 30pt; /* Tamaño más pequeño para dispositivos móviles */
  }
}
</style>
