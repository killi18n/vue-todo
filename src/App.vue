<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/common.scss';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $theme-color;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
// #nav {
//     padding: 30px;
// }

// #nav a {
//     font-weight: bold;
//     color: $theme-color;
// }

// #nav a.router-link-exact-active {
//     color: #42b983;
// }
</style>
