<template>
  <div class="p-5">
    <router-view></router-view>
  </div>
    <FooterComponent />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
}
}
</script>

<style>
html,body{
background: lightgray;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding: 2rem; */
  width: 28rem;
  margin: 0 auto;
  height: 45rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);  
  overflow: scroll;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color:white;
}


</style>
