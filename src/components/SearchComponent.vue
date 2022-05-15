<template>
  <div class="">
<div>
  <div class="mt-8 pl-4 relative flex items-center">
    <input type="text" placeholder="Type name or number" name="search" id="search" class="py-2 px-4 shadow-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-500 rounded-md">
    <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
