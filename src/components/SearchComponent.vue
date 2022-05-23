<template>
  <div>
    <div class="mt-8 relative flex items-center">
      <input
        type="text"
        placeholder="Type name or number"
        name="search"
        id="search"
        v-model="searchString"
        @input='$emit("searchInitiated",$event.target.value)'
        class="py-2 px-4 shadow-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-500 rounded-md"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data(){
    return{
      searchString: ''
    }
  },
  props: {
    msg: String,
  },
};
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
