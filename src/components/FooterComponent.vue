<template>
  <div class="footer border-t-2 border-grey-400">
    <div class="icons-container relative bottom-4 flex justify-center">
      <fa v-if="this.$route.path === '/'" :icon="['fas', 'circle-plus']" size="2x"
        class="circle-plus hover:cursor-pointer" />
      <fa v-if="this.$route.name === 'Detail' && !editMode" :icon="['fas', 'pen']"
        class="circle-pen hover:cursor-pointer" @click="emitEvent(true)"/>
      <fa v-if="this.$route.name === 'Detail' && !editMode" :icon="['fas', 'trash-can']"
        class="circle-trashcan hover:cursor-pointer ml-3" />
      <fa v-if="this.$route.name === 'Detail' && editMode" :icon="['fas', 'floppy-disk']"
        class="circle-floppydisk hover:cursor-pointer ml-3" @click="emitEvent(false)" />


    </div>
    <div class="delete-icon"></div>
  </div>
</template>



<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      editMode: false,
    }
  },
  methods:{
    emitEvent(editStatus){
      this.editMode = editStatus;
      this.emitter.emit('emit-mode-toggle',{'editMode': editStatus});
    }
  },
}
</script>


<style scoped>
.circle-plus {
  color: #1e88e5;
}

.circle-pen,
.circle-trashcan,
.circle-floppydisk {
  border: 1px solid #1e88e5;
  border-radius: 50%;
  padding: 0.7rem;
  background-color: #1e88e5;
  color: white;
}

.circle-trashcan {
  background-color: rgb(181, 37, 37);
  border: rgb(181, 37, 37);
}
</style>