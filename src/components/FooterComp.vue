<template>
  <footer class="bg-dark text-center text-white py-3 mt-5" id="footer">
    <div class="container">
      <!-- Lista de tags -->
      <ul class="list-inline mb-3 d-flex justify-content-center flex-wrap">
        <li class="list-inline-item tag-item mx-2 my-1">
          <img src="/public/img/aventura.png" alt="Icono Aventura" class="tag-icon" />
          <span class="tag-text">Aventura</span>
        </li>
        <li class="list-inline-item tag-item mx-2 my-1">
          <img src="/public/img/pc.png" alt="Icono Edad Media" class="tag-icon" />
          <span class="tag-text">Experiencia para PC</span>
        </li>
        <li class="list-inline-item tag-item mx-2 my-1">
          <img src="/public/img/medieval.png" alt="Icono Estrategia" class="tag-icon" />
          <span class="tag-text">Reinos Medievales</span>
        </li>
        <li class="list-inline-item tag-item mx-2 my-1">
          <img src="/public/img/explorar.png" alt="Icono RPG" class="tag-icon" />
          <span class="tag-text">Exploración</span>
        </li>
      </ul>

      <!-- Texto de derechos reservados -->
      <p class="mb-0 text-center">&copy; 2024 Camino al Trono. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Estilos para los tags */
.tag-item {
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #fff;
}

.tag-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
}

.tag-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.tag-text {
  font-size: 1rem;
}
</style>
