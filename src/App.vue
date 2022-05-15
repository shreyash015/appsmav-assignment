<template>
  <ContactsCompnent/>
</template>

<script>
import ContactsCompnent from './components/ContactsCompnent.vue'

export default {
  name: 'App',
  components: {
    ContactsCompnent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 2rem;
  max-width: 28rem;
  margin: 0 auto;
  height: 45rem;
  border: 1px solid grey;
  overflow: scroll;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>
