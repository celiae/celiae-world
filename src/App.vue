<template>
  <div id="nav">
    <router-link class="btn-bubble3" to="/">Home</router-link>
    <router-link class="btn-bubble4" to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "~@/sass/main.scss";
@import "~@/sass/util.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  height: 7rem;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  background: rgba(0, 0, 0, 0.452);
  border-bottom: 1px solid white;
  a {
    width: 14rem;
    font-weight: bold;
    color: #2c3e50;
    font-size: 2rem;
    background: rgba(255, 254, 254, 0.849);
    padding: 1rem;
    border-radius: 2rem;
    &.router-link-exact-active {
      color: #b97242;
    }
  }
}
</style>
