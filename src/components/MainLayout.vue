
<!-- src/components/MainLayout.vue -->
<template>


    <!--  -->
    <main>
      <!-- Aquí se inyectará el contenido de cada página -->
    <router-view />
    </main>


</template>

<script>

export default {
  name: 'MainLayout',
}
</script>

<style lang="css" scoped>
/* styles.css */
body {
    background: radial-gradient(circle, rgb(221, 172, 117), rgb(219, 166, 87)),
                linear-gradient(to bottom, rgba(186, 122, 26, 0.893), rgba(128, 83, 21, 0.8));
    background-blend-mode: multiply;
    background-attachment: fixed;
    background-size: cover;
    font-family: "MedievalSharp", cursive;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}

h1, h2 {
    font-family: "Caesar Dressing", cursive;
    color: #fff;
}

.masthead {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("../img/intro.png") no-repeat center center;
    background-size: cover;
}

.masthead h1 {
    font-size: 2rem;
    color: #fde31a;
    text-shadow: 2px 2px 0 #000;
}

.masthead h2 {
    font-size: 1rem;
    color: #fdd40a;
}

.project h5 {
    font-family: "Permanent Marker", cursive;
    font-size: 1.5rem;
    color: antiquewhite;
    text-decoration: underline;
}

.project {
    padding: 2%;
    color: aliceblue;
    background-color: #312d2b;
    border-radius: 5px;
}

.descarga {
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    background: transparent;
    position: relative;
    width: 15em;
    height: 6em;
    border: none;
    outline: none;
}

.descarga .corner {
    width: 4em;
    height: 4em;
    background: #313030;
    position: absolute;
    transform: rotate(45deg);
    transition: 0.2s;
}

/* Flechas */
.descarga:hover .arrow {
    background: #434343;
}

/* Media Queries */
@media (max-width: 768px) {
    h1 { font-size: 1.5rem; }
    h2 { font-size: 0.9rem; }
    .descarga {
        width: 12em;
        height: 5em;
    }
}

@media (max-width: 480px) {
    h1 { font-size: 1.2rem; }
    h2 { font-size: 0.8rem; }
    .descarga {
        width: 10em;
        height: 4em;
        font-size: 0.8em;
    }
}

</style>
